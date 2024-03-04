import ErrorHandler from '../utils/errorHandler';
import { disconnectDB, prisma } from '../config/db/dbConnection';
import { redisClient } from '../config/redis';
import { getOtp, sendOtp } from '../config/whatsapp/otpConfig';
import { getPhone, getUserById, postCreateUser } from '../dao/userDao';
import * as jwt from "jsonwebtoken"

const getProfileService = async (id: number) => {
    try {
        const userProfile = await getUserById(id)

        if (!userProfile) {
            throw new ErrorHandler({
                success: false,
                message: 'User not found',
                status: 404
            });
        }
        return userProfile;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

// ------ Send OTP service ------
const sendOtpService = async (phone: string) => {
    const otp = getOtp()
    try {
        const otpCode = await sendOtp(phone, otp,);
        if (otpCode) {
            const createRedis = await redisClient.set(phone, otp);
            await redisClient.expire(phone, 600)
        }
        return {
            success: true,
            message: "OTP successfully sent to your WhatsApp.",
            data: otp
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

// ------ Verify OTP service ------
const verifyOtpService = async (phone: string, otp: string) => {
    try {
        const otpValue = await redisClient.get(phone);
        if (!otpValue) {
            throw new ErrorHandler({
                status: 400,
                success: false,
                message: "OTP has expired. Please request a new one.",
            })
        } else if (otp !== otpValue) {
            throw new ErrorHandler({
                status: 409,
                success: false,
                message: "The OTP entered is incorrect. Please try again.",
            })
        } else if (otp == otpValue) {
            return {
                success: true,
                message: "Phone number verified successfully.",
                data: phone
            }
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

// ------ Register service ------
const registerUserService = async (phone: string) => {
    try {
        const userPhone = await getPhone(phone)
        if (userPhone) {
            throw new ErrorHandler({
                success: false,
                message: 'Phone Number already registered, please use other Phone Number',
                status: 409,
            });
        }

        const createUser = await postCreateUser(phone)

        return {
            success: true,
            message: "User registered successfully",
            data: createUser
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}


const loginUserService = async ({ username, password }: LoginInput) => {
    try {
        
        const user = await prisma.users.findUnique({
            where: { username }
        });

        
        if (!user) {
            throw new ErrorHandler({
                success: false,
                message: 'User not found',
                status: 404,
            });
        }

        
        // const isPasswordValid = await bcryptjs.compare(password, user.password || '');

        
        // if (!isPasswordValid) {
        //     throw new ErrorHandler({
        //         success: false,
        //         message: 'Incorrect password',
        //         status: 401,
        //     });
        // }

        
        const token = jwt.sign({ userId: user.id, email: user.email, username: user.username }, process.env.SECRET_KEY || '');

        return {
            success: true,
            data: { token },
            message: 'User logged in successfully.'
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            message: error.message,
            status: error.status || 500,
        });
    } finally {
        await disconnectDB();
    }
}

export {getProfileService,  registerUserService, sendOtpService, verifyOtpService, loginUserService }
