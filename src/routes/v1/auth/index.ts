import express from 'express';
import { checkPhoneAvailability, userLogin, userLogout, userRegisterbyPhone } from '../../../controllers/user';

const authRouter = express.Router()

authRouter.post('/login', userLogin)
authRouter.post('/logout', userLogout)
authRouter.post('/check-number', checkPhoneAvailability)
authRouter.post('/register', userRegisterbyPhone)



export default authRouter;