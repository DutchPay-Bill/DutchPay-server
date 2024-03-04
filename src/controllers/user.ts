import { Request, Response, NextFunction } from 'express';
import { getProfileService, registerUserService, sendOtpService, verifyOtpService } from '../services/userService';
import client from '../config/whatsapp/waServerAdmin';
import waConnection from '../config/whatsapp/waServerAdmin';

const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
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
const sendOtp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone_number } = req.body
    const result = await sendOtpService(phone_number)
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data
      })
    }
  } catch (error) {
    next(error);
  }
}

// ------ Verify OTP ------
const verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone_number, otp } = req.body
    const result = await verifyOtpService(phone_number, otp)
    if (result?.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data
      })
    }
  } catch (error) {
    next(error);
  }
}

// ------ WA admin login ------
const waAdminLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authenticationResponse = {
      qr_code: waConnection.getCode(),
      auth: waConnection.authenticated(),
      success: true
    };
    return authenticationResponse;
  } catch (error) {
    throw new Error('Authentication failed');
  }
}

//------ Create user ------
const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phone } = req.body;
    const result = await registerUserService(phone)
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

export { getUserProfile, userRegister, sendOtp, verifyOtp, waAdminLogin }