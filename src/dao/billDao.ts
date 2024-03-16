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

const getAllBillByUserId = async (user_id: number, limit: number, offset: number) => {
    try {
        const getAllBill = await prisma.bill.findMany({
            where: { user_id },
            take: limit,
            skip: offset
        });

        return getAllBill;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || "Internal Server Error",
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

const createBill = async (user_id: number, description: string, payment_method_id: number, discount: number | null, tax: number, service: number | null, date: Date) => {
    try {
        const newBill = await prisma.bill.create({
            data: {
                users: { connect: { id: user_id } },
                description,
                payment_method_details: { connect: { id: payment_method_id } },
                discount,
                tax,
                service,
                is_completed: false,
                date,
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

const updateBillTotalPrice = async (user_id: number, bill_id: number, total_Price: number) => {
    try {
        const updateBillStatus = await prisma.bill.update({
            where: { id: bill_id, user_id: user_id },
            data: { total_price: total_Price }
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
// update bill total price
// pisahin update status bill & status friends order
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

const getRecentBill = async (user_id: number) => {
    try {
        const recentBill = await prisma.bill.findFirst({
            where: { user_id: user_id },
            orderBy: { date: 'desc' }
        });
        return recentBill
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

export { getBillById, getAllBillByUserId, getBillIdByOrderId, createBill, updateBillStatus, updateBillTotalPrice, getRecentBill };
