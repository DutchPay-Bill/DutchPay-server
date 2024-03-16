import ErrorHandler from '../utils/errorHandler';
import { createBill, getAllBillByUserId, getBillById, getRecentBill, updateBillStatus, updateBillTotalPrice } from '../dao/billDao';
import { parseISO } from 'date-fns';

const getOneBillService = async (user_id: number, bill_id: number) => {
    try {
        const checkBill = await getBillById(user_id, bill_id);
        if (!checkBill) {
            throw new ErrorHandler({
                success: false,
                message: `Bill Not Found...`,
                status: 404
            });
        }
        return {
            ...checkBill,
            total_price: checkBill.total_price?.toString(),
        };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const getAllBillByUserService = async (user_id: number, pageSize: number, pageNumber: number) => {
    try {

        const offset = (pageNumber - 1) * pageSize;

        const getListBill = await getAllBillByUserId(user_id, pageSize, offset);

        if (!getListBill) {
            throw new ErrorHandler({
                success: false,
                message: `Bill Not Found...`,
                status: 404
            });
        }
        return getListBill.map(bill => ({
            ...bill,
            total_price: bill.total_price?.toString(),
        }));
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const addBillService = async (user_id: number, description: string, payment_method_id: number, discount: number | null, tax: number, service: number | null, date: string ) => {
    try {
        if (!user_id ) {
            throw new ErrorHandler({
                success: false,
                message: `User Not Found...`,
                status: 404
            });
        }

        if (!description || !payment_method_id || !tax ) {
            throw new ErrorHandler({
                success: false,
                message: `Description/ Payment Method/ Tax Missing...`,
                status: 404
            });
        }
        const parsedDate: Date = parseISO(date);
        const newBill = await createBill(user_id, description, payment_method_id, discount, tax, service, parsedDate);

        return newBill

    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const updateBillTotalPriceService = async (user_id: number, bill_id: number, total_price: number) => {
    try {
        if (!bill_id) {
            throw new ErrorHandler({
                success: false,
                message: `Bill Not Found...`,
                status: 404
            });
        } else if (!total_price) {
            throw new ErrorHandler({
                success: false,
                message: `Required data missing...`,
                status: 404
            });
        }
        const addTotalPrice = await updateBillTotalPrice(user_id, bill_id, total_price) 
        return addTotalPrice
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
    // Calculate total_price
            // let totalPrice = newFriendsOrders.reduce((total, { order }) => total + (order.price * BigInt(order.qty)), BigInt(0));
            // if (service !== null) {
            //     totalPrice += totalPrice * BigInt(service) / BigInt(100);
            // }
            // totalPrice += totalPrice * BigInt(tax) / BigInt(100);
            // if (discount !== null) {
            //     totalPrice -= totalPrice * BigInt(discount) / BigInt(100);
            // }
}
const updateBillStatusService = async (user_id: number, bill_id: number) => {
    try {
        if (!bill_id) {
            throw new ErrorHandler({
                success: false,
                message: `Bill Not Found...`,
                status: 404
            });
        }
        const bill = await getBillById(user_id, bill_id)
        const newStatus = !bill?.is_completed
        const updatedStatus =  await updateBillStatus(bill_id, newStatus);

        return updatedStatus
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const getRecentBillService = async (user_id: number) => {
    try {
        const recentBill =  await getRecentBill(user_id);

        return recentBill
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export { getOneBillService, getAllBillByUserService, addBillService, updateBillTotalPriceService, updateBillStatusService, getRecentBillService };
