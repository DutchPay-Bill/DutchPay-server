import express from 'express';
import { checkPhoneAvailability, userLogin, userLogout, userRegisterbyPhone } from '../../../controllers/user';
import passport from 'passport';
import JWT_TOKEN from '../../../config/jwt/jwt';
import jwt from "jsonwebtoken"
import { add } from 'date-fns';
import { client_url } from '../../../utils/url';

const authRouter = express.Router()

authRouter.post('/login', userLogin)
authRouter.post('/logout', userLogout)
authRouter.post('/check-number', checkPhoneAvailability)
authRouter.post('/register', userRegisterbyPhone)

// google auth
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    if (!req.user) {
        res.redirect(`${client_url}/google-auth/failed`)
    }
    const payload = {
        id: (req.user as any).id,
    };
    const token = jwt.sign(payload, JWT_TOKEN!, { expiresIn: '7d' });
    const oneWeekInSeconds = 7 * 24 * 3600;
    res.cookie('access_token', token, {
        maxAge: oneWeekInSeconds * 1000,
        httpOnly: false,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
    res.redirect(`${client_url}/google-auth/success`)
});

export default authRouter;