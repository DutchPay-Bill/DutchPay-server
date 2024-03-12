import { Request, Response, NextFunction } from 'express';
import { checkRegisteredPhoneService, getProfileService, loginUserService, registerUserbyPhoneService, updateUserProfileService } from '../services/userService';
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

//------ Check user phone number ------
const checkPhoneAvailability = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone_number } = req.body;
    const result = await checkRegisteredPhoneService(phone_number)
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

//------ Create user by phone ------
const userRegisterbyPhone = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fullname, phone_number, password } = req.body;
    const result = await registerUserbyPhoneService(fullname, phone_number, password)
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
        httpOnly: false,
        secure: false,
        sameSite: 'strict',
        path: '/',
      });
      return res.status(200).json({
        success: true,
        message: result.message,
        expired_cookies: result.data.expiredToken,
      });
    }
  } catch (error) {
    next(error);
  }
};
 
const userLogout = async (req: Request, res: Response) => {
  res.clearCookie('access_token');
  res.status(200).json({
    success: true,
    message: "See you next time..!",
  })
}

const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const userId = (req.user as JwtPayload).id;
      const updateData = req.body;
      const updatedUser = await updateUserProfileService(userId, updateData);
      
      res.status(200).json({
          success: true,
          message: updatedUser,
      });
  } catch (error) {
      next(error);
  }
}

export { getUserProfile, userRegisterbyPhone, userLogin, userLogout, updateUserProfile, checkPhoneAvailability }
