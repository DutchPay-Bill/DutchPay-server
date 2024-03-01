import bcryptjs from "bcryptjs";
import ErrorHandler from '../utils/errorHandler';
import { disconnectDB, prisma } from '../config/db/dbConnection';

export const getUserProfile = async (userId: number) => {
    try {
        const userProfile = await prisma.users.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                username: true,
                fullname: true,
                phone_number: true,
                email: true,
                dob: true,
                photo_profile: true,
                created_at: true,
                update_at: true,
            }
        });
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

    const existEmail = await prisma.users.findUnique({
        where: { email }
    });

    if (existEmail) {
        throw new ErrorHandler({
            success: false,
            message: 'Email already registered, please use other email',
            status: 409,
        });
    }

    try {
        const hashedPass = await bcryptjs.hash(password, 10);
        const newUser = await prisma.users.create({
            data: { email, password: hashedPass }
        });
        return {
            success: true,
            data: newUser,
            message: 'User registered successfully.'
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            message: error.message,
            status: error.status,
        });
    } finally {
        await disconnectDB();
    }
}


export { registerUser }
