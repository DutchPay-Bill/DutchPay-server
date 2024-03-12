import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";
import { getOrdersByBillId } from "./orderDao";

const createFriendsOrder = async (order_id: number, friends_id: number[], price: bigint, qty: number) => {
    try {
        const dividedPrice = BigInt(price) * BigInt(qty) / BigInt(friends_id.length);
        const newFriendOrders = [];
        for (const friend_id of friends_id) {
            const newFriendOrder = await prisma.friends_order.create({
                data: {
                    orders: { connect: { id: order_id } },
                    friends: { connect: { id: friend_id } },
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

const updateFriendsOrderStatus = async (friends_id: number, is_paid: boolean) => {
    try {
        const updateStatus = await prisma.friends_order.updateMany({
            where: { friends_id: friends_id },
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

const getFriendOrdersByFriendId = async (friends_id: number) => {
    try {
        const getFriendOrders = await prisma.friends_order.findMany({
            where: { friends_id: friends_id }
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

const getFriendsOrdersByBillId = async (bill_id: number) => {
    try {
        const orders = await getOrdersByBillId(bill_id);
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