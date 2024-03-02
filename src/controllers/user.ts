import { Request, Response, NextFunction } from 'express';
import { getUserProfile as getUserProfileService, registerUser } from '../services/userService';
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

//------ Create user ------
const userRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const { email, password } = req.body;
    const result = await registerUser({ email, password })
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
      })
      }
    } catch (error) {
      next(error);
    }
  };

export { getUserProfile, userRegister }