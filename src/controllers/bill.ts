import { Request, Response, NextFunction } from 'express';
import { getOneBillService, getAllBillByUserService } from "../services/billService";
import { JwtPayload } from 'jsonwebtoken';

const getOneBill = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const userId = (req.user as JwtPayload).id
        const billId = parseInt(req.params.billId, 10);
        const oneBill = await getOneBillService(userId, billId)

        res.status(200).json({
            success: true,
            message: oneBill,
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
            message: billList,
        });
    } catch (error) {
        next(error);
    }
}

export { getOneBill, getBillList }