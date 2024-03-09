import express from 'express';
import authRouter from './auth';
import userRouter from './user';
import friendRouter from './friend';
import friendsOrderRouter from './friendsOrder';
import orderRouter from './order';
import billRouter from './bill';
import { authenticate } from 'passport';
import authenticationMiddleware from '../../middlewares/authentication';

const v1Router = express.Router()

v1Router.use('/user', authenticationMiddleware, userRouter);
v1Router.use('/friend', authenticationMiddleware, friendRouter);
v1Router.use('/friends-order', authenticationMiddleware, friendsOrderRouter);
v1Router.use('/orders', authenticationMiddleware, orderRouter);
v1Router.use('/bill', authenticationMiddleware, billRouter);

export default v1Router