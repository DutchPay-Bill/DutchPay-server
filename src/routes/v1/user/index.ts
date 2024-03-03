import express from 'express';
import { getUserProfile, sendOtp, userRegister, verifyOtp, waAdminLogin } from '../../../controllers/user';

const userRouter = express.Router()

userRouter.get('/', getUserProfile)
userRouter.post('/', userRegister)
userRouter.post('/send-otp', sendOtp)
userRouter.post('/verify-otp', verifyOtp)
userRouter.get('/wa-admin', waAdminLogin)

export default userRouter