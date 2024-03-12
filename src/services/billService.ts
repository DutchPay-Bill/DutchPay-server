import ErrorHandler from '../utils/errorHandler';
import { createBill, getAllBillByUserId, getBillById, updateBillStatus } from '../dao/billDao';
import { addBillIdToOrders } from '../dao/orderDao';
import { createFriendsOrderService } from './friendOrderService';
import { createOrderService } from './orderService';
import { getFriendsOrdersByBillId } from '../dao/friendsOrderDao';

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

const addBillService = async (userId: number, description: string, paymentMethodId: number, discount: number | null, tax: number, service: number | null, orderDetails: { menuName: string; qty: number; price: bigint, friendIds: number[] }[], ) => {
    try {
        if (!userId) {
            throw new ErrorHandler({
                success: false,
                message: `User Not Found...`,
                status: 404
            });
        }

        if (!description || !paymentMethodId || !tax || !orderDetails) {
            throw new ErrorHandler({
                success: false,
                message: `Description/ Payment Method/ Order details / Friends / Tax Missing...`,
                status: 404
            });
        }

        // Create friends orders
        const newOrdersAndFriendsOrders = await Promise.all(orderDetails.map(async orderDetail => {
            const order = await createOrderService(userId, orderDetail.menuName, orderDetail.qty, orderDetail.price);
            await createFriendsOrderService(userId, order.menu_name, order.qty, order.price, orderDetail.friendIds);
            return order;
        }));

        // Calculate total_price
        let totalPrice = newOrdersAndFriendsOrders.reduce((total, order) => total + order.price, BigInt(0));
        if (discount !== null) {
            totalPrice -= totalPrice * BigInt(discount) / BigInt(100);
        }
        if (service !== null) {
            totalPrice += totalPrice * BigInt(service) / BigInt(100);
        }
        totalPrice += totalPrice * BigInt(tax) / BigInt(100);

        // Create a new bill
        const newBill = await createBill(userId, description, paymentMethodId, discount, tax, service, BigInt(totalPrice));

        // Add bill ID to the orders
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

const updateBillStatusService = async (billId: number) => {
    try {
        const friendsOrders = await getFriendsOrdersByBillId(billId);
        const allPaid = friendsOrders.every(order => order.is_paid === true);

        const newStatus = allPaid ? true : false;
        await updateBillStatus(billId, newStatus);

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
