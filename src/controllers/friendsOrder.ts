import { Request, Response, NextFunction } from 'express';
import { createFriendsOrderService } from '../services/friendOrderService';
import { JwtPayload } from 'jsonwebtoken';

const createFriendsOrder = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.user as JwtPayload).id
        const { orders_id, friends_id, price } = req.body
        const newFriendsOrder = await createFriendsOrderService(userId, orders_id, friends_id, price)

        res.status(200).json({
            success: true,
            message: newFriendsOrder,
        });
    } catch (error) {
        next(error);
    }
}

export { createFriendsOrder }