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
            status: error.status || 500,
            message: error.message,
        });
    }
};

const createOrder = async (userId: number, menuName: string, qty: number, price: bigint) => {
    try {
        const newOrder = await prisma.orders.create({
            data: {
                user_id: userId,
                menu_name: menuName,
                qty: qty,
                price: price,
            },
        });
        return newOrder;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message,
        });
    }
};

const deleteOrder = async (orderId: number) => {
    try {
        const deletedOrder = await prisma.orders.delete({
            where: {
                id: orderId,
            },
        });
        return deletedOrder;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message,
        });
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
