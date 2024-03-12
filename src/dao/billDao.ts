import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getBillById = async (userId: number, billId: number) => {
    try {
        const getOneBill = await prisma.bill.findUnique({where: {id: billId, user_id: userId}})

        return getOneBill
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

const getAllBillByUserId = async (userId: number) => {
    try {
        const getAllBill = await prisma.bill.findMany({where: {user_id: userId}})

        return getAllBill
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

const getBillIdByOrderId = async(orderId: number) => {
    try {
        const order = await prisma.orders.findUnique({where: {id: orderId}})
        if (order) {
            return order.bill_id;
        }
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

const createBill = async (userId: number, description: string, paymentMethodId: number, discount: number | null, tax: number, service: number | null, totalPrice: bigint) => {
    try {
        const newBill = await prisma.bill.create({
            data: {
                users: { connect: { id: userId } },
                description,
                payment_method_details: { connect: { id: paymentMethodId } },
                discount,
                tax,
                service,
                total_price: totalPrice,
                is_completed: false,
                date: new Date()
            }
        });
        return newBill;
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

const updateBillStatus = async (billId: number, is_completed: boolean) => {
    try {
        const updateBillStatus = await prisma.bill.update({
            where: { id: billId },
            data: { is_completed: is_completed }
        });
        return updateBillStatus
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

export { getBillById, getAllBillByUserId, getBillIdByOrderId, createBill, updateBillStatus };
