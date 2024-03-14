import express from 'express';
import { addNewPayment, getPaymentMethodDetail } from '../../../controllers/payment';

const paymentRouter = express.Router()

paymentRouter.post('/', addNewPayment)
paymentRouter.get('/', getPaymentMethodDetail)

export default paymentRouter;