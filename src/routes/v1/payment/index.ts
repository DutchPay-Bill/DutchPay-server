import express from 'express';
import { addNewPayment } from '../../../controllers/payment';

const paymentRouter = express.Router()

paymentRouter.post('/', addNewPayment)

export default paymentRouter;