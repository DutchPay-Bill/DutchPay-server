// ------ generate & send OTP ------
import { Client } from "whatsapp-web.js";
import waConnection from "./waServerAdmin";

const getOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log("Generated OTP:", otp);
    return otp.toString();
}

// Assuming `clientInit` is correctly set up to always resolve to a `Client` object
const sendOtp = async (phone: string, otp: string) => {
    const msg = `your otp is ${otp}`;
    try {
        console.log("Sending OTP...");
        const client = await waConnection.clientInit as Client;
        await client.sendMessage(`${phone}@c.us`, msg);
        console.log(`OTP sent to ${phone}.`);
        return true;
    } catch (error) {
        console.error("Error occurred:", error);
        return false; // Return false or handle the error as needed
    }
};




export { getOtp, sendOtp }