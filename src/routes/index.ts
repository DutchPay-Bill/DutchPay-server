import express from 'express';
import v1Router from './v1';
import passport from "passport";

const router = express.Router()

router.use('/v1', v1Router)

export default router