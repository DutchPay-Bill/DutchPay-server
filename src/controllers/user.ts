import { Request, Response, NextFunction } from 'express';
import { getProfileService, verifyOtpService, loginUserService, registerUserbyPhoneService } from '../services/userService';
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

// ------ Send OTP ------
// const sendOtp = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { phone_number } = req.body
//     const result = await sendOtpService(phone_number)
//     if (result.success) {
//       res.status(200).json({
//         success: true,
//         message: result.message,
//         data: result.data
//       })
//     }
//   } catch (error) {
//     next(error);
//   }
// }

// ------ Verify OTP ------
// const verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { phone_number, otp } = req.body
//     const result = await verifyOtpService(phone_number, otp)
//     if (result?.success) {
//       res.status(200).json({
//         success: true,
//         message: result.message,
//         data: result.data
//       })
//     }
//   } catch (error) {
//     next(error);
//   }
// }

// ------ WA admin login ------
// const waAdminLogin = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const authenticationResponse = {
      // qr_code: waConnection.getCode(),
      // auth: waConnection.authenticated(),
//       success: true
//     };
//     return authenticationResponse;
//   } catch (error) {
//     throw new Error('Authentication failed');
//   }
// }

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

  const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const result = await loginUserService({ username, password });
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
 

export { getUserProfile, userRegisterbyPhone, userLogin }
