import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const postPayment = async (user_id: number, card_number: bigint, card_name: string, payment_method_id: number)=> {
    try {
        const newPayment = await prisma.payment_method_detail.create({
            data: { user_id: user_id, card_number: card_number, card_name: card_name, payment_method_id: payment_method_id }
        })

        return newPayment
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

export { postPayment }