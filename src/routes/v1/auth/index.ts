import express from 'express';
import { userLogin, userRegisterbyPhone } from '../../../controllers/user';
import passport from 'passport';
import JWT_TOKEN from '../../../config/jwt/jwt';
import jwt from "jsonwebtoken"
import { add } from 'date-fns';

const authRouter = express.Router()

authRouter.post('/login', userLogin)
authRouter.post('/register', userRegisterbyPhone)

// google auth
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    if (!req.user) {
        return res.status(401).json({ success: false, message: "User authentication failed" });
    }
    const payload = {
        id: (req.user as any).id,
    };
    const token = jwt.sign(payload, JWT_TOKEN!, { expiresIn: '7d' });
    const currentDate = new Date()
    const expiredToken = add(currentDate, { weeks: 1 });
    const oneWeekInSeconds = 7 * 24 * 3600;
    res.cookie('access_token', token, {
        maxAge: oneWeekInSeconds * 1000,
        httpOnly: true,
        path: '/' });
    res.status(200).json({
        success: true,
        message: 'User logged in successfully.',
        expired_cookies: expiredToken });
});

export default authRouter;