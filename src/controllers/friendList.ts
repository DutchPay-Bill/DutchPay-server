import { Request, Response, NextFunction } from 'express';
import { getFriendListByUserIdService } from '../services/friendListService';

export const getFriendList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = parseInt(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }
        
        const friendList = await getFriendListByUserIdService(userId);
        if (!friendList.length) {
            return res.status(404).json({ message: 'Friend list not found for this user' });
        }
        res.json(friendList);
    } catch (error) {
        next(error);
    }
};
