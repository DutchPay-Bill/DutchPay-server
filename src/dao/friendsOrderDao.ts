import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";
import { getOrdersByBillId } from "./orderDao";

const createFriendsOrder = async (orderId: number, friendsIds: number[], price: bigint, qty: number) => {
    try {
        const dividedPrice = BigInt(price) * BigInt(qty) / BigInt(friendsIds.length);
        const newFriendOrders = [];
        for (const friendId of friendsIds) {
            const newFriendOrder = await prisma.friends_order.create({
                data: {
                    orders: { connect: { id: orderId } },
                    friends: { connect: { id: friendId } },
                    friend_order_price: dividedPrice,
                    is_paid: false,
                    created_at: new Date()
                }
            });
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
    } finally {
        await disconnectDB();
    }
}

const updateFriendsOrderStatus = async (friendsId: number, is_paid: boolean) => {
    try {
        const updateStatus = await prisma.friends_order.updateMany({
            where: { friends_id: friendsId },
            data: { is_paid: is_paid }
        });
        return updateStatus
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getFriendOrdersByFriendId = async (friendId: number) => {
    try {
        const getFriendOrders = await prisma.friends_order.findMany({
            where: { friends_id: friendId }
        });
        return getFriendOrders
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    } finally {
        await disconnectDB();
    }
}

const getFriendsOrdersByBillId = async (billId: number) => {
    try {
        const orders = await getOrdersByBillId(billId);
        const orderIds = orders.map(order => order.id);

        const friendsOrders = await prisma.friends_order.findMany({
            where: {
                orders_id: {
                    in: orderIds,
                },
            },
        });

        return friendsOrders;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export { createFriendsOrder, updateFriendsOrderStatus, getFriendOrdersByFriendId, getFriendsOrdersByBillId }