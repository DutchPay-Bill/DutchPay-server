import { Request, Response, NextFunction } from 'express';
import { getUserProfile as getUserProfileService } from '../services/userService';
import ErrorHandler from '../utils/errorHandler';

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.userId;
        const userProfile = await getUserProfileService(userId);
        throw new ErrorHandler({
            success: true,
            message: `${userProfile.fullname}`,
            status: 200
        });
         
    } catch (error) {
        next(error);
    }
};

export { getUserProfile }