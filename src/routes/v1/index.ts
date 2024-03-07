import express from 'express';
import authRouter from './auth';
import userRouter from './user';
import friendRouter from './friend';
import { authenticate } from 'passport';
import authenticationMiddleware from '../../middlewares/authentication';

const v1Router = express.Router()

v1Router.use('/auth', authRouter)
v1Router.use('/user', authenticationMiddleware, userRouter);
v1Router.use('/friend', authenticationMiddleware, friendRouter);

export default v1Router