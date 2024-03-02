import { Request, Response, NextFunction } from 'express';
import { getProfile, registerUser } from '../services/userService';

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.id;
        const userProfile = await getProfile(userId);
        res.status(200).json({
          success: true,
          message: userProfile,
        })
         
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