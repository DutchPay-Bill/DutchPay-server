import express from 'express';
import { createNewBill, getBillList, getOneBill, getRecentBill, updateBillStatus } from '../../../controllers/bill';

const billRouter = express.Router()

billRouter.get('/recent', getRecentBill)
billRouter.get('/:bill_id', getOneBill)
billRouter.get('/', getBillList)
billRouter.post('/', createNewBill)
billRouter.put('/:bill_id', updateBillStatus)

export default billRouter;