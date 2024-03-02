import bcryptjs from "bcryptjs";
import ErrorHandler from '../utils/errorHandler';
import { prisma } from '../config/db/dbConnection';
import { getEmail, postCreateUser, getUserById } from "../dao/userDao";

const getProfile = async (id: number) => {
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
    } catch (error) {
        throw new ErrorHandler({
            success: false,
            message: 'Error fetching user profile',
            status: 500
        });
    }
};

//------ register ------
const registerUser = async ({ email, password }: RegisterInput) => {
    // if (!username) {
    //   throw new ErrorHandler({
    //     success: false,
    //     message: "Username cannot be empty",
    //     status: 400,
    //   });
    // }
    // if (password.length < 6) {
    //   throw new ErrorHandler({
    //     success: false,
    //     message: "Password must be at least 6 characters long",
    //     status: 400,
    //   });
    // }
    // if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
    //   throw new ErrorHandler({
    //     success: false,
    //     message: "Password must contain both alphabetic and numeric characters",
    //     status: 400,
    //   });
    // }

    // const existUser = await prisma.user.findUnique({
    //   where: { username }
    // });

    // if (existUser) {
    //   throw new ErrorHandler({
    //     success: false,
    //     message: 'Username already exists',
    //     status: 409,
    //   });
    // }

    try {
        const userEmail = await getEmail(email)
        if (userEmail) {
            throw new ErrorHandler({
                success: false,
                message: 'Email already registered, please use other email',
                status: 409,
            });
        }

        const hashedPass = await bcryptjs.hash(password, 10);
        const createUser = await postCreateUser(email, hashedPass)

        return {
            success: true,
            message: "Successfully creating user",
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


export { getProfile, registerUser }
