import express from 'express';
import { userLogin, userRegisterbyPhone } from '../../../controllers/user';
import passport from 'passport';
import JWT_TOKEN from '../../../config/jwt/jwt';
import jwt from "jsonwebtoken"

const authRouter = express.Router()

authRouter.post('/login', userLogin)
authRouter.post('/register', userRegisterbyPhone)

// google auth
authRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get("auth/google/callback", passport.authenticate('google', { session: false }), (req, res) => {
    if (!req.user) {
        return res.status(401).json({ success: false, message: "User authentication failed" });
    }
    const payload = {
        username: (req.user as any).displayName,
    };
    const token = jwt.sign(payload, JWT_TOKEN!, { expiresIn: '1y' });
    res.cookie('access_token', token, { httpOnly: true });
    res.status(200).json({ success: true, data: payload });
});

export default authRouter;