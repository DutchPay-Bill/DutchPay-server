import ErrorHandler from '../utils/errorHandler';
import { getFriendById } from '../dao/friendDao';
import { getOrderById } from '../dao/orderDao';
import { createFriendsOrder } from '../dao/friendsOrderDao';

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

export { createFriendsOrderService }