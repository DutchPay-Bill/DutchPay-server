import express from 'express';
import googleRouter from './v1/auth/google';

const rootRoute = express.Router()

rootRoute.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to DutchPay API"
    })
})

rootRoute.use('/', googleRouter)

export default rootRoute