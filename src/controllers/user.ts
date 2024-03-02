import { Request, Response, NextFunction } from 'express';
import { getUserProfile as getUserProfileService, registerUser, loginUser } from '../services/userService';
import ErrorHandler from '../utils/errorHandler';

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            throw new ErrorHandler({
                success: false,
                message: 'User ID not found in JWT token',
                status: 401
            });
        }

        const userProfile = await getUserProfileService(userId);
        if (!userProfile) {
            throw new ErrorHandler({
                success: false,
                message: 'User profile not found',
                status: 404
            });
        }

        res.status(200).json({
            success: true,
            data: userProfile
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

  const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const result = await loginUser({ username, password });
      if (result.success) {
        res.status(200).json({
          success: true,
          message: result.message,
          token: result.data.token 
        });
      } else {
        
        res.status(500).json({
          success: false,
          message: result.message,
        });
      }
    } catch (error) {
      next(error);
    }
  };
  
  
  

export { getUserProfile, userRegister, userLogin }