import ErrorHandler from '../utils/errorHandler';
import { getPhone, getUserById, postCreateUserGoogle, postCreateUserPhone, updateUserProfile, deleteUserById } from '../dao/userDao';
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
        return {
            success: true,
            message: "Successfully get user profile",
            data: userProfile
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

// ------ check Registered Phone service ------
const checkRegisteredPhoneService = async (phone_number: string) => {
    try {
        const userPhone = await getPhone(phone_number)
        if (userPhone) {
            throw new ErrorHandler({
                success: false,
                message: 'Phone Number already registered, please use other Phone Number',
                status: 409,
            });
        }
        return {
            success: true,
            message: "Phone Number is available to register",
            data: userPhone
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

// ------ Register by Phone service ------
const registerUserbyPhoneService = async (fullname: string, phone_number: string, password: string) => {
    try {
        if(!phone_number) {
            throw new ErrorHandler({
                success: false,
                message: 'Phone number cannot be empty',
                status: 400
            })
        }
        if (password.length < 6) {
            throw new ErrorHandler({
                success: false,
                message: 'Password must be at least 6 characters long',
                status: 400
            })
        }
        if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
            throw new ErrorHandler({
                success: false,
                message: 'Password must contain both alphabetic and numeric characters',
                status: 400
            })
        }
        const userPhone = await getPhone(phone_number)
        if (userPhone) {
            throw new ErrorHandler({
                success: false,
                message: 'Phone Number already registered, please use other Phone Number',
                status: 409,
            });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const createUser = await postCreateUserPhone(fullname, phone_number, hashedPassword)

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
                message: 'Phone Number or Password invalid',
                status: 401,
            });
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password || '');
        if (!isPasswordValid) {
            throw new ErrorHandler({
                success: false,
                message: 'Phone Number or Password invalid',
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
const registerUserbyGoogleService = async (fullname: string, email: string) => {
    try {
        const createUser = await postCreateUserGoogle(fullname, email)
        const newUser = {
            success: true,
            message: "User registered successfully",
            data: createUser
        };
        return newUser;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const updateUserProfileService = async (id: number, updateData: any) => {
    try {
        const user = await getUserById(id);
        if (!user) {
            throw new ErrorHandler({
                success: false,
                message: 'User Not Found.. Please login',
                status: 404
            });
        }

        const filteredUpdateData: any = {};
        for (const key in updateData) {
            if (updateData[key] !== undefined) {
                filteredUpdateData[key] = updateData[key];
            }
        }

        const updatedUser = await updateUserProfile(id, filteredUpdateData);
        
        return updatedUser;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

const deleteUserByIdService = async (id: number): Promise<any> => {
    try {
        const deletedUser = await deleteUserById(id);
        return {
            success: true,
            message: "User deleted successfully",
            data: deletedUser
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export {getProfileService,  registerUserbyPhoneService, loginUserService, registerUserbyGoogleService, updateUserProfileService, checkRegisteredPhoneService, deleteUserByIdService }
