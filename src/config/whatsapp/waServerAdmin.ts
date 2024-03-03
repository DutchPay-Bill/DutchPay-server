import qrcode from "qrcode-terminal";
import { Client, RemoteAuth } from "whatsapp-web.js";

    const client = new Client({
        authStrategy: new RemoteAuth(),
        puppeteer: {
            headless: false
        }
    });

    client.on('loading_screen', (percent, message) => {
        console.log('LOADING SCREEN', percent, message);
    });

    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true })
        console.log('QR RECEIVED', qr);
    });

    client.on('authenticated', () => {
        console.log('AUTHENTICATED');
    });

    client.on('auth_failure', msg => {
        console.error('AUTHENTICATION FAILURE', msg);
    });

    client.on('ready', () => {
        client.sendMessage("6285732632669@c.us", 'your server is ready');
    });


export default client
