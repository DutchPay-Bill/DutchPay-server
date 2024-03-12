import { Request, Response, NextFunction } from 'express';
import { createFriendsOrderService, updateFriendOrderStatusService } from '../services/friendOrderService';
import { JwtPayload } from 'jsonwebtoken';

const createFriendsOrder = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const user_id = (req.user as JwtPayload).id
        const { menu_name, qty, price, friends_id } = req.body;
        const newFriendsOrder = await createFriendsOrderService(user_id, menu_name, qty, price, friends_id);

        res.status(200).json({
            success: true,
            message: "Friends Order Created successfully",
            data: newFriendsOrder,
        });
    } catch (error) {
        next(error);
    }
}

const updateFriendOrderStatus = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const friend_id = parseInt(req.params.friend_id, 10)
        const { is_paid } = req.body
        const newFriendsOrder = await updateFriendOrderStatusService(friend_id, is_paid)

        res.status(200).json({
            success: true,
            message: newFriendsOrder,
        });
    } catch (error) {
        next(error);
    }
}

export { createFriendsOrder, updateFriendOrderStatus }