import express from 'express';
import { addNewFriend } from '../../../controllers/friend';

const friendRouter = express.Router()

friendRouter.post('/', addNewFriend)

export default friendRouter;