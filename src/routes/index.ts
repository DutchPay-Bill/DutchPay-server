import express from 'express'
import { userRouter } from './v1'

const router = express.Router()

router.use('/v1/users', userRouter)

export default router