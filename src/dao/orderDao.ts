import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getOrderById = async (orderId: number) => {
    try {
        const searchOrder = await prisma.orders.findUnique({
            where:{id: orderId} 
        })

        return searchOrder
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

export { getOrderById }