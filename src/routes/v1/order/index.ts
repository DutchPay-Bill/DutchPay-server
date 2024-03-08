import express from 'express';
import { createOrder, getOrderById, getAllOrders, deleteOrder, updateOrder } from '../../../controllers/order';

const orderRouter = express.Router()

orderRouter.get('/:orderId', getOrderById)
orderRouter.get('/', getAllOrders)
orderRouter.post('/', createOrder)
orderRouter.put('/:orderId', updateOrder)
orderRouter.delete('/:orderId', deleteOrder)

export default orderRouter;