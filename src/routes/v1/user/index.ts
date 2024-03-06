import express from 'express';
import { getUserProfile, userLogin, userRegisterbyPhone } from '../../../controllers/user';
import passport from 'passport';
import JWT_TOKEN from '../../../config/jwt/jwt';
import jwt from "jsonwebtoken"

const userRouter = express.Router()

userRouter.get('/', getUserProfile)
userRouter.post('/', userRegisterbyPhone)
// userRouter.post('/send-otp', sendOtp)
// userRouter.post('/verify-otp', verifyOtp)
// userRouter.get('/wa-admin', waAdminLogin)

// google auth
userRouter.get("/login", (req, res) => {
    if (req.user) {
        res.redirect("/profile");
    }
    res.render("login");
});

userRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

userRouter.get("auth/google/callback", passport.authenticate('google', { session: false }), (req, res) => {
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

export default userRouter;