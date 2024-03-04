// ------ generate & send OTP ------

import client from "./waServerAdmin";

const getOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log("Generated OTP:", otp);
    return otp.toString();
}

const sendOtp = async (phone: string, otp: string,) => {
    const msg = `your otp is ${otp}`;
    try {
        console.log("Sending OTP...");
        const response = await client.sendMessage(`${phone}@c.us`, msg);
        console.log(`OTP sent to ${phone}.`);
        return true
    } catch (error) {
        console.error("Error occurred:", error);
    }
};



export { getOtp, sendOtp }