import ErrorHandler from '../utils/errorHandler';
import { getPayment, postPayment } from '../dao/paymentDao';

async function createPaymentService(user_id: number, card_number: number, card_name: string, payment_method_id: number) {
    try {

        const post = await postPayment(user_id, card_number, card_name, payment_method_id);
        return post;
    } catch (error: any) {
        throw new Error('Payment Service Error: ' + error.message);
    }
}

export { createPaymentService }