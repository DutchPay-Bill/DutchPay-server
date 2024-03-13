import ErrorHandler from '../utils/errorHandler';
import { createFriendsOrder, getFriendOrdersByFriendId, updateFriendsOrderStatus } from '../dao/friendsOrderDao';
import { getBillIdByOrderId } from '../dao/billDao';
import { createOrderService } from './orderService';
import { updateBillStatusService } from './billService';

const createFriendsOrderService = async (user_id: number, menu_name: string, qty: number, price: bigint, friends_id: number[]) => {
    try {
        const order = await createOrderService(user_id, menu_name, qty, price);
        const order_id = order.id;

        if (!order) {
            throw new ErrorHandler({
                success: false,
                message: 'Order not found',
                status: 404
            });
        }

        if (friends_id.length === 0) {
            throw new ErrorHandler({
                success: false,
                message: 'No friends provided',
                status: 400
            });
        }

        const newFriendOrders = await createFriendsOrder(order_id, friends_id, price, qty);
        
        return { order, newFriendOrders };
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

const updateFriendOrderStatusService = async (friend_id: number, is_paid: boolean) => {
    try {
        const friendsOrders = await getFriendOrdersByFriendId(friend_id);
        if (!friendsOrders) {
            throw new ErrorHandler({
                success: false,
                message: `Friend with ID ${friend_id} doesn't have any order..`,
                status: 404
            });
        }
        const updatedStatus = is_paid? true : false;

        const updateFriendOrderStatus = await updateFriendsOrderStatus(friend_id, updatedStatus)
        const order_id = friendsOrders[0].orders_id as number; 
        const bill_id = await getBillIdByOrderId(order_id) as number
        console.log(order_id, bill_id)
        await updateBillStatusService(bill_id);
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