import express from 'express';
import { getBillList, getOneBill } from '../../../controllers/bill';

const billRouter = express.Router()

billRouter.get('/:billId', getOneBill)
billRouter.get('/', getBillList)

export default billRouter;