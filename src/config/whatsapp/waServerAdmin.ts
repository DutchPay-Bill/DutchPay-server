import qrcode from "qrcode-terminal";
import { Client, LocalAuth, RemoteAuth } from "whatsapp-web.js";

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      args: ['--no-sandbox']
}
});

let isAuthenticated = false;
let qrCode : any;

client.initialize();

client.on('loading_screen', handleLoadingScreen);
client.on('qr', handleQRCode);
client.on('authenticated', handleAuthentication);
client.on('auth_failure', handleAuthFailure);
client.on('ready', handleReady);

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

function handleAuthFailure(msg: string) {
    console.error('AUTHENTICATION FAILURE', msg);
}

async function handleReady() {
    console.log('READY');
}


const authenticated = () => isAuthenticated;  
const getCode = () => qrCode;
const waConnection = { client, authenticated, getCode}

export default waConnection
