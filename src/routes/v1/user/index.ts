import express from 'express';
import { getUserProfile, updateUserProfile, deleteUser } from '../../../controllers/user';
import authenticationMiddleware from '../../../middlewares/authentication';

const userRouter = express.Router()

userRouter.get('/', getUserProfile)
userRouter.patch('/', updateUserProfile)
userRouter.delete('/deleteaccount', authenticationMiddleware, deleteUser)

export default userRouter;