import { Request, Response } from 'express';
import { createOrderService, getOrderByIdService, getAllOrderService, deleteOrderService, updateOrderService } from '../services/orderService'; // Adjust the path as necessary

const createOrder = async (req: Request, res: Response) => {
    try {
        const { userId, menuName, qty, price } = req.body;
        const newOrder = await createOrderService(userId, menuName, qty, BigInt(price));
        res.status(201).json(newOrder);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const getOrderById = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const order = await getOrderByIdService(orderId);
        res.json(order);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await getAllOrderService();
        res.json(orders);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const order = await deleteOrderService(orderId);
        res.json(order);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

const updateOrder = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const { newMenuName, newQty, newPrice } = req.body;
        const updatedOrder = await updateOrderService(orderId, newMenuName, newQty, BigInt(newPrice));
        res.json(updatedOrder);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

export { createOrder, getOrderById, getAllOrders, deleteOrder, updateOrder };
