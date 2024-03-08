import ErrorHandler from '../utils/errorHandler';
import { getFriendById } from '../dao/friendDao';
import { getOrderById } from '../dao/orderDao';
import { createFriendsOrder, getFriendOrdersByFriendId, updateFriendsOrderStatus } from '../dao/friendsOrderDao';
import { Order_status_Enum } from '../../prisma/generated/client';

const createFriendsOrderService = async (userId: number, orderId: number, friendsIds: number[], price: number) => {
    try {
        const order = await getOrderById(orderId);

        if (!order) {
            throw new ErrorHandler({
                success: false,
                message: 'Order or friends not found',
                status: 404
            });
        }

        const newFriendOrders: FriendOrderInput[] = [];
        for (const friendId of friendsIds) {
            const friend = await getFriendById(userId, friendId);
            if (!friend) {
                throw new ErrorHandler({
                    success: false,
                    message: `Friend with ID ${friendId} not found`,
                    status: 404
                });
            }

            const newFriendOrder = await createFriendsOrder(orderId, friendId, price);
            newFriendOrders.push(newFriendOrder);
        }

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

const updateFriendOrderStatusService = async (friendId: number, status: Order_status_Enum) => {
    try {
        const friendsOrders = await getFriendOrdersByFriendId(friendId);
        if (!friendsOrders) {
            throw new ErrorHandler({
                success: false,
                message: `Friend with ID ${friendId} doesn't have any order..`,
                status: 404
            });
        }

        if (!(status in Order_status_Enum)) {
            throw new ErrorHandler({
                success: false,
                message: "Invalid Status",
                status: 404
            });
        }

        const updateFriendOrderStatus = await updateFriendsOrderStatus(friendId, status)
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