import ErrorHandler from "../utils/errorHandler";
import { prisma } from "../config/db/dbConnection";

const getOrderById = async (orderId: number) => {
    try {
        const searchOrder = await prisma.orders.findUnique({
            where: { id: orderId }
        });

        return searchOrder;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const getAllOrders = async () => {
    try {
        const orders = await prisma.orders.findMany();
        return orders;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};


const createOrder = async (userId: number, menuName: string, qty: number, price: bigint, billId?: number) => {
    try {
        const existingOrder = await prisma.orders.findFirst({
            where: {
                user_id: userId,
                menu_name: menuName,
            },
        });

        if (existingOrder) {
            throw new ErrorHandler({
                success: false,
                status: 400,
                message: 'An order with this menu name already exists for this user.',
            });
        }

        const newOrder = await prisma.orders.create({
            data: {
                user_id: userId,
                menu_name: menuName,
                qty: qty,
                price: price,
                bill_id: billId || null, // This ensures null is used if billId is undefined or falsey
            },
        });

        return newOrder;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message || 'Error creating order',
        });
    }
};

const deleteOrder = async (orderId: number) => {
    try {
        const result = await prisma.$transaction(async (tx) => {
            await tx.friends_order.deleteMany({
                where: {
                    orders_id: orderId,
                },
            });
            const orderExists = await tx.orders.findUnique({
                where: {
                    id: orderId,
                },
            });

            if (!orderExists) {
                return null;
            }
            return await tx.orders.delete({
                where: {
                    id: orderId,
                },
            });
        });
        if (result === null) {
            throw new Error('Order not found');
        }
        return result;
    } catch (error: any) {
        console.error(error);
        throw error;
    }
};


const updateOrder = async (orderId: number, newMenuName: string, newQty: number, newPrice: bigint) => {
    try {
        const updatedOrder = await prisma.orders.update({
            where: {
                id: orderId,
            },
            data: {
                menu_name: newMenuName,
                qty: newQty,
                price: newPrice,
            },
        });
        return updatedOrder;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export { getOrderById, createOrder, deleteOrder, updateOrder, getAllOrders };
