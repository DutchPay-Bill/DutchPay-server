import { Request, Response, NextFunction } from 'express';
import { getProfileService, loginUserService, registerUserbyPhoneService } from '../services/userService';
// import waConnection from '../config/whatsapp/waServerAdmin';
import ErrorHandler from '../utils/errorHandler';
import { JwtPayload } from 'jsonwebtoken';

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req.user as JwtPayload).id;
    const userProfile = await getProfileService(userId);
    res.status(200).json({
      success: true,
      message: userProfile,
    })

  } catch (error) {
    next(error);
  }
};

//------ Create user by phone ------
const userRegisterbyPhone = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone } = req.body;
    const result = await registerUserbyPhoneService(phone)
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

//------ Login by phone ------
const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone_number, password } = req.body;
    const result = await loginUserService({phone_number, password});
    if (result.success) {
      const oneWeekInSeconds = 7 * 24 * 3600;
      res.cookie("access_token", result.data.accessToken, {
        maxAge: oneWeekInSeconds * 1000,
        httpOnly: true,
        path: '/'
      });
      return res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};
 

export { getUserProfile, userRegisterbyPhone, userLogin }
