import { Request, Response, NextFunction } from 'express';
import { getOneBillService, getAllBillByUserService, addBillService, updateBillStatusService, updateBillTotalPriceService, getRecentBillService } from "../services/billService";
import { JwtPayload } from 'jsonwebtoken';

const getOneBill = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const user_id = (req.user as JwtPayload).id
        const bill_id = parseInt(req.params.bill_id, 10);
        const oneBill = await getOneBillService(user_id, bill_id)

        res.status(200).json({
            success: true,
            message: `Bill #${bill_id}:`,
            data: oneBill
        });
    } catch (error) {
        next(error);
    }
}

const getBillList = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const user_id = (req.user as JwtPayload).id
        const pageSize = parseInt(req.query.pageSize as string) || 5; 
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const billList = await getAllBillByUserService(user_id, pageSize, pageNumber)

        res.status(200).json({
            success: true,
            message: "List of Bill",
            data: billList
        });
    } catch (error) {
        next(error);
    }
}

const createNewBill = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = (req.user as JwtPayload).id
        const { description, payment_method_id, discount, tax, service, date } = req.body;
        const newBill = await addBillService(user_id, description, payment_method_id, discount, tax, service, date);
        
        res.status(200).json({
            success: true,
            message: "NeW Bill:",
            data: newBill
        });
    } catch (error) {
        next(error);
    }
  };

  const updateBillStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = (req.user as JwtPayload).id
        const bill_id = parseInt(req.params.bill_id, 10);
        const updateBill = await updateBillStatusService(user_id, bill_id);
        
        res.status(200).json({
            success: true,
            message: "NeW Bill:",
            data: updateBill
        });
    } catch (error) {
        next(error);
    }
  };

  const updateBillTotalPrice = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = (req.user as JwtPayload).id
        const bill_id = parseInt(req.params.bill_id, 10);
        const { total_price } = req.body
        const updateBill = await updateBillTotalPriceService(user_id, bill_id, total_price);
        
        res.status(200).json({
            success: true,
            message: "NeW Bill:",
            data: updateBill
        });
    } catch (error) {
        next(error);
    }
  };

  const getRecentBill = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user_id = (req.user as JwtPayload).id
        const recentBill = await getRecentBillService(user_id);
        
        res.status(200).json({
            success: true,
            message: "Recent Bill:",
            data: recentBill
        });
    } catch (error) {
        next(error);
    }
  };

export { getOneBill, getBillList, createNewBill, updateBillStatus, updateBillTotalPrice, getRecentBill }