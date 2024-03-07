import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createFriendsOrder = async (orderId: number, friendsId: number, price: number) => {
    try {
        const friendsCount = await prisma.friends_order.count({ where: { friends_id: friendsId } });

        const dividedPrice = price / friendsCount;
        const newFriendsOrder = await prisma.friends_order.create({
            data: {
                orders: { connect: { id: orderId } },
                friends: { connect: { id: friendsId } },
                friend_order_price: dividedPrice,
                status: "unpaid"
            }
        })

        return newFriendsOrder
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

export { createFriendsOrder }