import express from 'express';
import { getUserProfile, updateUserProfile } from '../../../controllers/user';

const userRouter = express.Router()

userRouter.get('/', getUserProfile)
userRouter.patch('/', updateUserProfile)

export default userRouter;