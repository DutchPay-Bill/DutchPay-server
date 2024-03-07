import express from 'express';
import { createFriendsOrder } from '../../../controllers/friendsOrder';

const friendsOrderRouter = express.Router()

friendsOrderRouter.post('/', createFriendsOrder)

export default friendsOrderRouter;