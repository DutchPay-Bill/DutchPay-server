import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getBillById = async (user_id: number, bill_id: number) => {
    try {
        const getOneBill = await prisma.bill.findUnique({where: {id: bill_id, user_id: user_id}})

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

const getAllBillByUserId = async (user_id: number) => {
    try {
        const getAllBill = await prisma.bill.findMany({where: {user_id: user_id}})

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

const getBillIdByOrderId = async(order_id: number) => {
    try {
        const order = await prisma.orders.findUnique({where: {id: order_id}})
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

const createBill = async (user_id: number, description: string, payment_method_id: number, discount: number | null, tax: number, service: number | null, totalPrice: bigint) => {
    try {
        const newBill = await prisma.bill.create({
            data: {
                users: { connect: { id: user_id } },
                description,
                payment_method_details: { connect: { id: payment_method_id } },
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

const updateBillStatus = async (bill_id: number, is_completed: boolean) => {
    try {
        const updateBillStatus = await prisma.bill.update({
            where: { id: bill_id },
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
