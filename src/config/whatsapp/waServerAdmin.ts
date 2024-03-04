import mongoose from "mongoose";
import qrcode from "qrcode-terminal";
import { Client, LocalAuth, RemoteAuth } from "whatsapp-web.js";

const sessionSchema = new mongoose.Schema({
    session: Object
});
const SessionModel = mongoose.model('Session', sessionSchema);

// Connect to MongoDB
mongoose.connect("mongodb+srv://rpbasukidev:revounextteam1@rpb.bo8sgbf.mongodb.net/");

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox']
    }
});

let isAuthenticated = false;
let qrCode: any;

// Wrap the asynchronous code in an async function
const initializeClient = async () => {
    const sessionData = await SessionModel.findOne();
    if (sessionData) {
        client.initialize({ session: sessionData.session });
    } else {
        client.initialize();
    }

    client.on('loading_screen', handleLoadingScreen);
    client.on('qr', handleQRCode);
    client.on('authenticated', handleAuthentication);
    client.on('auth_failure', handleAuthFailure);
    client.on('ready', handleReady);
    client.on('authenticated', saveSession);
};

initializeClient(); // Call the async function to initialize the client

async function handleLoadingScreen(percent: any, message: any) {
    console.log('LOADING SCREEN', percent, message);
}

function handleQRCode(qr: any) {
    qrcode.generate(qr, { small: true });
    qrCode = qr;
}

function handleAuthentication() {
    console.log('AUTHENTICATED');
    isAuthenticated = true;
}

async function saveSession(session: any) {
    const sessionData = new SessionModel({ session });
    await sessionData.save(); // Make sure to await the save operation
    console.log('Session saved successfully.');
}

function handleAuthFailure(msg: string) {
    console.error('AUTHENTICATION FAILURE', msg);
}

async function handleReady() {
    console.log('READY');
}

const authenticated = () => isAuthenticated;
const getCode = () => qrCode;
const waConnection = { client, authenticated, getCode };

export default waConnection;
