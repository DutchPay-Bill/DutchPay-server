import { Request, Response } from 'express';
import { createOrderService, getOrderByIdService, getAllOrderService, deleteOrderService, updateOrderService } from '../services/orderService'; // Adjust the path as necessary
import ErrorHandler from '../utils/errorHandler';

const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, menuName, qty, price, billId } = req.body;

        // Convert userId, qty, and price to their appropriate types before passing them to the service
        // Assuming billId is optional and can be undefined if not provided
        const newOrder = await createOrderService(parseInt(userId), menuName, parseInt(qty), BigInt(price), billId ? parseInt(billId) : undefined);

        const modifiedOrder = {
            ...newOrder,
            price: newOrder.price.toString(), // Ensure price is returned as a string
        };
        
        res.status(201).json(modifiedOrder); // Return the new order if creation was successful
    } catch (error: any) {
        // Check if the error is an instance of ErrorHandler to use the custom status, otherwise default to 500
        const status = (error instanceof ErrorHandler) ? error.status : 500;
        const message = (error instanceof ErrorHandler) ? error.message : 'An error occurred while creating the order.';
        res.status(status).json({ message });
    }
};

const getOrderById = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const order = await getOrderByIdService(orderId);
        if (order) {
            const modifiedOrder = {
                ...order,
                price: order.price.toString(),
            };
            res.json(modifiedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};


const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await getAllOrderService();
        const modifiedOrders = orders.map(order => ({
            ...order,
            price: order.price.toString(),
        }));
        res.json(modifiedOrders);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const result = await deleteOrderService(orderId);
        res.json(result);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

interface UpdatedOrder {
    id: number;
    user_id: number | null;
    bill_id: number | null;
    menu_name: string;
    qty: number;
    price: string;
}

const updateOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderId = parseInt(req.params.orderId);
        const { newMenuName, newQty, newPrice } = req.body;
        const updatedOrderData = await updateOrderService(orderId, newMenuName, newQty, BigInt(newPrice));
        const updatedOrder: UpdatedOrder = {
            ...updatedOrderData,
            price: updatedOrderData.price.toString(), 
        };
        res.json(updatedOrder);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};



export { createOrder, getOrderById, getAllOrders, deleteOrder, updateOrder };
