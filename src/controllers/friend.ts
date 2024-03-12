import { Request, Response, NextFunction } from 'express';
import { addFriendService } from '../services/friendService';
import { JwtPayload } from 'jsonwebtoken';

const addNewFriend = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const { friends_name } = req.body
        const userId = (req.user as JwtPayload).id
        const newFriend = await addFriendService(userId, friends_name)
        res.status(200).json({
            success: true,
            message: newFriend,
          })
    } catch (error) {
        next(error);
    }
}

export { addNewFriend }