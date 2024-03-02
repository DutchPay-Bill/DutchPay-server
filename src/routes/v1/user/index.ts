import express from 'express'
import { getUserProfile, userRegister } from '../../../controllers/user';

const userRouter = express.Router()

userRouter.get('/', getUserProfile);
userRouter.post('/', userRegister);

export default userRouter;