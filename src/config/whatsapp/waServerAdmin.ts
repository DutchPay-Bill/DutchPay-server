// import mongoose from "mongoose";
// import qrcode from "qrcode-terminal";
// import { Client, LocalAuth, RemoteAuth } from "whatsapp-web.js";
// import { MongoStore } from "wwebjs-mongo";

// let isAuthenticated = false;
// let qrCode: any;

// const clientInit =mongoose.connect("mongodb+srv://rpbasukidev:revounextteam1@rpb.bo8sgbf.mongodb.net/test")
//     .then(() => {
//         const store = new MongoStore({
//             mongoose: mongoose,
//             collectionName: 'sessions',
//             ttl: 30 * 24 * 60 * 60 // 30 days
//         });

//         const client = new Client({
//             authStrategy: new RemoteAuth({
//                 store: store,
//                 backupSyncIntervalMs: 300000
//             }),
//             puppeteer: {
//                 headless: true
//             }
//         });

//         client.initialize();

//         // Set up client event listeners
//         client.on('loading_screen', handleLoadingScreen);
//         client.on('qr', handleQRCode);
//         client.on('authenticated', handleAuthentication);
//         client.on('auth_failure', handleAuthFailure);
//         client.on('ready', handleReady);
//         client.on('remote_session_saved', async () => {
//             console.log('session saved')
//         });
//         return client
//     })
//     .catch(error => {
//         console.error('Error connecting to MongoDB:', error);
//     });

// // Your event handler functions here

// async function handleLoadingScreen(percent: any, message: any) {
//     console.log('LOADING SCREEN', percent, message);
// }

// function handleQRCode(qr: any) {
//     qrcode.generate(qr, { small: true });
//     qrCode = qr;
// }

// function handleAuthentication() {
//     console.log('AUTHENTICATED');
//     isAuthenticated = true;
// }

// function handleAuthFailure(msg: string) {
//     console.error('AUTHENTICATION FAILURE', msg);
// }

// async function handleReady() {
//     console.log('READY');
// }

// const authenticated = () => isAuthenticated;
// const getCode = () => qrCode;
// const waConnection = { clientInit, authenticated, getCode };

// export default waConnection;
