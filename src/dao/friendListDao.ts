import { prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const getFriendListByUserId = async (userId: number) => {
    try {
        const friendList = await prisma.friends.findMany({
            where: { user_id: userId },
        });

        return friendList;
    } catch (error: any) {
        console.error("Error getting friend list:", error);
        throw new ErrorHandler({
            success: false,
            status: error.status || 500,
            message: error.message,
        });
    }
};

export { getFriendListByUserId } ;
