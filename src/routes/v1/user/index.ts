import express from 'express'
import { getUserProfile, userLogin } from '../../../controllers/user';

const userRouter = express.Router()

userRouter.get('/', getUserProfile);
userRouter.post('/', userLogin);

export default userRouter;