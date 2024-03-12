import ErrorHandler from '../utils/errorHandler';
import { createFriendsOrder, getFriendOrdersByFriendId, updateFriendsOrderStatus } from '../dao/friendsOrderDao';
import { getBillIdByOrderId } from '../dao/billDao';
import { createOrderService } from './orderService';
import { updateBillStatusService } from './billService';

const createFriendsOrderService = async (userId: number, menuName: string, qty: number, price: bigint, friendsIds: number[]) => {
    try {
        const order = await createOrderService(userId, menuName, qty, price);
        const orderId = order.id;

        if (!order) {
            throw new ErrorHandler({
                success: false,
                message: 'Order not found',
                status: 404
            });
        }

        if (friendsIds.length === 0) {
            throw new ErrorHandler({
                success: false,
                message: 'No friends provided',
                status: 400
            });
        }

        const newFriendOrders = await createFriendsOrder(orderId, friendsIds, price, qty);
        
        return newFriendOrders;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const updateFriendOrderStatusService = async (friendId: number, is_paid: boolean) => {
    try {
        const friendsOrders = await getFriendOrdersByFriendId(friendId);
        if (!friendsOrders) {
            throw new ErrorHandler({
                success: false,
                message: `Friend with ID ${friendId} doesn't have any order..`,
                status: 404
            });
        }
        const updatedStatus = is_paid? true : false;

        const updateFriendOrderStatus = await updateFriendsOrderStatus(friendId, updatedStatus)
        const orderId = friendsOrders[0].orders_id as number; 
        const billId = await getBillIdByOrderId(orderId) as number
        await updateBillStatusService(billId);
        return updateFriendOrderStatus
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

export { createFriendsOrderService, updateFriendOrderStatusService }