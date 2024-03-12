import { Request, Response, NextFunction } from 'express';
import { getOneBillService, getAllBillByUserService, addBillService } from "../services/billService";
import { JwtPayload } from 'jsonwebtoken';

const getOneBill = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.user as JwtPayload).id
        const billId = parseInt(req.params.billId, 10);
        const oneBill = await getOneBillService(userId, billId)

        res.status(200).json({
            success: true,
            message: `Bill #${billId}:`,
            data: oneBill
        });
    } catch (error) {
        next(error);
    }
}

const getBillList = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.user as JwtPayload).id
        const billList = await getAllBillByUserService(userId)

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
        const userId = (req.user as JwtPayload).id
        const { description, paymentMethodId, discount, tax, service, orderDetails } = req.body;
        const newBill = await addBillService(userId, description, paymentMethodId, discount, tax, service, orderDetails);
        
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