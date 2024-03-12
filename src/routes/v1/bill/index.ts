import express from 'express';
import { createNewBill, getBillList, getOneBill } from '../../../controllers/bill';

const billRouter = express.Router()

billRouter.get('/:billId', getOneBill)
billRouter.get('/', getBillList)
billRouter.post('/', createNewBill)

export default billRouter;