import mongoose from "mongoose";
import qrcode from "qrcode-terminal";
import { Client, LocalAuth, RemoteAuth } from "whatsapp-web.js";

const sessionSchema = new mongoose.Schema({
    session: Object
});
const SessionModel = mongoose.model('Session', sessionSchema);

mongoose.connect("mongodb+srv://rpbasukidev:revounextteam1@rpb.bo8sgbf.mongodb.net/");

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox']
    }
});

let isAuthenticated = false;
let qrCode: any;

const initializeClient = async () => {
    client.initialize();

    client.on('loading_screen', handleLoadingScreen);
    client.on('qr', handleQRCode);
    client.on('authenticated', handleAuthentication);
    client.on('auth_failure', handleAuthFailure);
    client.on('ready', handleReady);
    client.on('authenticated', saveSession);
};

initializeClient();

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
    await sessionData.save();
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
