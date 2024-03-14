import { getFriendListByUserId } from '../dao/friendListDao';
import ErrorHandler from '../utils/errorHandler';

const getFriendListByUserIdService = async (userId: number) => {
    try {
        const friendList = await getFriendListByUserId(userId);
        return friendList;
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
};

export { getFriendListByUserIdService }
