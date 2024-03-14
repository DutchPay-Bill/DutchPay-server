import { postPayment, getPaymentMethodDetail } from '../dao/paymentDao';
import ErrorHandler from '../utils/errorHandler';

async function createPaymentService(user_id: number, card_number: bigint, card_name: string, payment_method_id: number) {
    try {

        const post = await postPayment(user_id, card_number, card_name, payment_method_id);
       
        return post;
    } catch (error: any) {
        throw new Error('Payment Service Error: ' + error.message);
    }
}

const getPaymentMethodDetailService = async (user_id: number) => {
    try {
        const paymentMethodDetail = await getPaymentMethodDetail(user_id)

        if (!paymentMethodDetail) {
            throw new ErrorHandler({
                success: false,
                message: 'Payment Method Detail not found',
                status: 404
            });
        }
        return {
            success: true,
            message: "Successfully get Payment Method Detail",
            data: paymentMethodDetail
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export { createPaymentService, getPaymentMethodDetailService }