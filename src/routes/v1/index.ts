import express from 'express';
import userRouter from './user';
import { authenticate } from 'passport';
import authRouter from './auth';

const v1Router = express.Router()

v1Router.use('/auth', authRouter)
v1Router.use('/user', userRouter);

export default v1Router