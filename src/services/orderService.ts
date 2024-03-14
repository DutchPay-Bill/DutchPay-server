import ErrorHandler from '../utils/errorHandler';
import { createOrder, deleteOrder, updateOrder, getAllOrders, getOrderById } from '../dao/orderDao';

const createOrderService = async (userId: number, menuName: string, qty: number, price: bigint, billId?: number) => {
    try {
        // Pass the billId along with other parameters to the DAO function
        const newOrder = await createOrder(userId, menuName, qty, price, billId);
        return newOrder;
    } catch (error: any) {
        // Check if the error is an instance of ErrorHandler and if it specifically relates to a bad request (400 status)
        if (error instanceof ErrorHandler && error.status === 400) {
            throw error; // Re-throw the error if it's a known business rule violation (like duplicate orders)
        }
        // For other types of errors, throw a generalized error
        throw new ErrorHandler({
            success: false,
            message: error.message || 'Error creating order', // Provide more specific error message from the caught error if available
            status: error.status || 500, // Use the status from the error if available, otherwise default to 500
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
        await deleteOrder(orderId);
        return { message: 'Order successfully deleted' };
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