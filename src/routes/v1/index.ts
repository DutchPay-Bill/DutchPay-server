import express from 'express';
import userRouter from './user';

const v1Router = express.Router()

v1Router.use('/user', userRouter);
v1Router.use('/login', userRouter)

export default v1Router