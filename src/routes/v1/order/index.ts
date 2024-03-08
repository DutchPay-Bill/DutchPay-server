import express from 'express';
import { createOrder, getOrderById, getAllOrders, deleteOrder, updateOrder } from '../../../controllers/order';

const orderRouter = express.Router()

orderRouter.get('/', getOrderById)
orderRouter.get('/', getAllOrders)
orderRouter.post('/', createOrder)
orderRouter.put('/', updateOrder)
orderRouter.delete('/', deleteOrder)

export default orderRouter;