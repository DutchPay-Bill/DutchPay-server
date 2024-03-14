import express from 'express';
import userRouter from './user';
import friendRouter from './friend';
import friendsOrderRouter from './friendsOrder';
import orderRouter from './order';
import billRouter from './bill';
import paymentRouter from './payment';
import friendListRouter from './friends';
import authenticationMiddleware from '../../middlewares/authentication';
import authRouter from './auth';

const v1Router = express.Router()

v1Router.use('/auth', authRouter);
v1Router.use('/user', authenticationMiddleware, userRouter);
v1Router.use('/friend', authenticationMiddleware, friendRouter);
v1Router.use('/friends', authenticationMiddleware, friendListRouter);
v1Router.use('/friends-order', authenticationMiddleware, friendsOrderRouter);
v1Router.use('/orders', authenticationMiddleware, orderRouter);
v1Router.use('/bill', authenticationMiddleware, billRouter);
v1Router.use('/payment', authenticationMiddleware, paymentRouter);

export default v1Router