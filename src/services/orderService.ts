import ErrorHandler from '../utils/errorHandler';
import { createOrder, deleteOrder, updateOrder, getAllOrders, getOrderById } from '../dao/orderDao';

const createOrderService = async (userId: number, menuName: string, qty: number, price: bigint) => {
    try {
        const newOrder = await createOrder(userId, menuName, qty, price);
        return newOrder;
    } catch (error) {
        throw new ErrorHandler({
            success: false,
            message: 'Error creating order',
            status: 500
        });
    }
};

const getOrderByIdService = async (orderId: number) => {
    try {
        const order = await getOrderById(orderId);
        if (!order) {
            throw new ErrorHandler({
                success: false,
                message: 'Order not found',
                status: 404
            });
        }
        return order;
    } catch (error) {
        throw new ErrorHandler({
            success: false,
            message: 'Error retrieving order',
            status: 500
        });
    }
};

const getAllOrderService = async () => {
    try {
        const orders = await getAllOrders();
        return orders;
    } catch (error) {
        throw new ErrorHandler({
            success: false,
            message: 'Error retrieving orders',
            status: 500
        });
    }
};

const deleteOrderService = async (orderId: number) => {
    try {
        const order = await deleteOrder(orderId);
        if (!order) {
            throw new ErrorHandler({
                success: false,
                message: 'Order not found',
                status: 404
            });
        }
        return order;
    } catch (error) {
        throw new ErrorHandler({
            success: false,
            message: 'Error deleting order',
            status: 500
        });
    }
};

const updateOrderService = async (orderId: number, newMenuName: string, newQty: number, newPrice: bigint) => {
    try {
        const updatedOrder = await updateOrder(orderId, newMenuName, newQty, newPrice);
        if (!updatedOrder) {
            throw new ErrorHandler({
                success: false,
                message: 'Order not found',
                status: 404
            });
        }
        return updatedOrder;
    } catch (error) {
        throw new ErrorHandler({
            success: false,
            message: 'Error updating order',
            status: 500
        });
    }
};

export { createOrderService, getOrderByIdService, getAllOrderService, deleteOrderService, updateOrderService}