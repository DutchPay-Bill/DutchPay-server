import express from 'express'
import { getUserProfile } from '../../../controllers/user';

const userRouter = express.Router()

userRouter.get('/', getUserProfile);

export default userRouter;