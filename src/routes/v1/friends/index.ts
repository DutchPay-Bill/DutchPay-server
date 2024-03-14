import express from 'express';
import { getFriendList } from '../../../controllers/friendList';

const friendListRouter = express.Router()

friendListRouter.get('/:userId', getFriendList)

export default friendListRouter;