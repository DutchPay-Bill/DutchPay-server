import { PrismaClient } from '@prisma/client';
import ErrorHandler from '../utils/errorHandler';

const prisma = new PrismaClient();

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
