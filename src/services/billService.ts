import ErrorHandler from '../utils/errorHandler';
import { createBill, getAllBillByUserId, getBillById, updateBillStatus } from '../dao/billDao';
import { addBillIdToOrders } from '../dao/orderDao';
import { createFriendsOrderService } from './friendOrderService';
import { createOrderService } from './orderService';
import { getFriendsOrdersByBillId } from '../dao/friendsOrderDao';

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

const getAllBillByUserService = async (user_id: number) => {
    try {
        const getListBill = await getAllBillByUserId(user_id);
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

const addBillService = async (user_id: number, description: string, payment_method_id: number, discount: number | null, tax: number, service: number | null, orderDetails: { menu_name: string; qty: number; price: bigint, friends_id: number[] }[], ) => {
    try {
        if (!user_id ) {
            throw new ErrorHandler({
                success: false,
                message: `User Not Found...`,
                status: 404
            });
        }

        if (!description || !payment_method_id || !tax || !orderDetails) {
            throw new ErrorHandler({
                success: false,
                message: `Description/ Payment Method/ Order details / Friends / Tax Missing...`,
                status: 404
            });
        }
        // Create friends orders
        const newOrdersAndFriendsOrders = await Promise.all(orderDetails.map(async orderDetail => {
            const order = await createOrderService(user_id, orderDetail.menu_name, orderDetail.qty, orderDetail.price);
            await createFriendsOrderService(user_id, order.menu_name, order.qty, order.price, orderDetail.friends_id);
            return order; 
        }));
        
        // calculate total_price
        let totalPrice = newOrdersAndFriendsOrders.reduce((total, order) => total + (order.price * BigInt(order.qty)), BigInt(0));
        if (service !== null) {
            totalPrice += totalPrice * BigInt(service) / BigInt(100);
        }
        totalPrice += totalPrice * BigInt(tax) / BigInt(100);
        if (discount !== null) {
            totalPrice -= totalPrice * BigInt(discount) / BigInt(100);
        }

        // Create a new bill
        const newBill = await createBill(user_id, description, payment_method_id, discount, tax, service, BigInt(totalPrice));

        // add bill id to the orders
        const orderIds = newOrdersAndFriendsOrders.map(order => order.id);
        await addBillIdToOrders(newBill.id, orderIds);

        return newBill;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const updateBillStatusService = async (bill_id: number) => {
    try {
        const friendsOrders = await getFriendsOrdersByBillId(bill_id);
        const allPaid = friendsOrders.every(order => order.is_paid === true);

        const newStatus = allPaid ? true : false;
        await updateBillStatus(bill_id, newStatus);

        return { success: true, message: 'Bill status updated successfully.' };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export { getOneBillService, getAllBillByUserService, addBillService, updateBillStatusService };
