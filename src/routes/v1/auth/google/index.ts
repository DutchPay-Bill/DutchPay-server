import express from "express";
import passport from "passport";
import { client_url } from "../../../../utils/url";
import JWT_TOKEN from "../../../../config/jwt/jwt";
import jwt from "jsonwebtoken";


const googleRouter = express.Router()

// google auth
googleRouter.get('/v1/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
googleRouter.get('/v1/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    if (!req.user) {
        res.redirect(`${client_url}/google-auth/failed`)
    }
    const payload = {
        id: req.user,
    };
    console.log('userID',payload )
    const token = jwt.sign(payload, JWT_TOKEN!, { expiresIn: '7d' });
    const oneWeekInSeconds = 7 * 24 * 3600;
    res.cookie('access_token', token, {
        maxAge: oneWeekInSeconds * 1000,
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        path: '/'
    });
    res.redirect(`${client_url}/google-auth/success`)
});

export default googleRouter