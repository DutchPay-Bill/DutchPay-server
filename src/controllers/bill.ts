import { Request, Response, NextFunction } from 'express';
import { getOneBillService, getAllBillByUserService, addBillService } from "../services/billService";
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
        const billList = await getAllBillByUserService(user_id)

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
        const { description, payment_method_id, discount, tax, service, date, orderDetails } = req.body;
        const newBill = await addBillService(user_id, description, payment_method_id, discount, tax, service, date, orderDetails);
        
        res.status(200).json({
            success: true,
            message: "List of Bill",
            data: newBill
        });
    } catch (error) {
        next(error);
    }
  };

export { getOneBill, getBillList, createNewBill }