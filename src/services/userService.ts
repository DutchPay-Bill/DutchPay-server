import ErrorHandler from '../utils/errorHandler';
import { getPhone, getUserById, postCreateUserGoogle, postCreateUserPhone } from '../dao/userDao';
import bcryptjs from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { add } from "date-fns";
import JWT_TOKEN from '../config/jwt/jwt';

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

// ------ Register by Phone service ------
const registerUserbyPhoneService = async (phone: string) => {
    try {
        const userPhone = await getPhone(phone)
        if (userPhone) {
            throw new ErrorHandler({
                success: false,
                message: 'Phone Number already registered, please use other Phone Number',
                status: 409,
            });
        }

        const createUser = await postCreateUserPhone(phone)

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


const loginUserService = async ({ phone_number, password }: LoginInput) => {
    try {  
        const user = await getPhone(phone_number)
        if (!user) {
            throw new ErrorHandler({
                success: false,
                message: 'User not found',
                status: 404,
            });
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password || '');
        if (!isPasswordValid) {
            throw new ErrorHandler({
                success: false,
                message: 'Incorrect password',
                status: 401,
            });
        }        
        const currentDate = new Date()
        const expiredToken = add(currentDate, { weeks: 1 });
        const accessToken = jwt.sign(
            { id: user.id }, JWT_TOKEN!, {expiresIn: '7d'}
        );
        return {
            success: true,
            message: 'User logged in successfully.',
            data: { accessToken, expiredToken },
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            message: error.message,
            status: error.status || 500,
        });
    }
}

// ------ Register by Google service ------
const registerUserbyGoogleService = async (email: string, username: string) => {
    try {
        const createUser = await postCreateUserGoogle(email, username)

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

export {getProfileService,  registerUserbyPhoneService, loginUserService, registerUserbyGoogleService }
