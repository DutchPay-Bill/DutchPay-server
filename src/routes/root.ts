import express from 'express';
import authRouter from './v1/auth';

const rootRoute = express.Router()

rootRoute.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to DutchPay API"
    })
})

// rootRoute.use('/v1/auth', authRouter)

export default rootRoute