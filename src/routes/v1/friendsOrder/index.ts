import express from 'express';
import { createFriendsOrder, updateFriendOrderStatus } from '../../../controllers/friendsOrder';

const friendsOrderRouter = express.Router()

friendsOrderRouter.post('/', createFriendsOrder)
friendsOrderRouter.put('/', updateFriendOrderStatus)

export default friendsOrderRouter;