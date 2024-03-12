import ErrorHandler from '../utils/errorHandler';
import { getAllBillByUserId, getBillById } from '../dao/billDao';

const getOneBillService = async (userId: number, billId: number) => {
    try {
        const checkBill = await getBillById(userId, billId);
        if (!checkBill) {
            throw new ErrorHandler({
                success: false,
                message: `Bill Not Found...`,
                status: 404
            });
        }
        return checkBill;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const getAllBillByUserService = async (userId: number) => {
    try {
        const getListBill = await getAllBillByUserId(userId);
        if (getListBill.length === 0) {
            return {
                success: true,
                message: 'List of Bill..:',
                data: [],
            };
        }
        if (!getListBill) {
            throw new ErrorHandler({
                success: false,
                message: `Bill Not Found...`,
                status: 404
            });
        }
        return getListBill;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export { getOneBillService, getAllBillByUserService };
