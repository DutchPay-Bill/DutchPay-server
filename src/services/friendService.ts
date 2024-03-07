import ErrorHandler from '../utils/errorHandler';
import { getUserById } from '../dao/userDao';
import { createFriend, getFriend } from '../dao/friendDao';

const addFriendService = async (userId: number, name: string) => {
    try {
        const user = await getUserById(userId)
        if (!user) {
            throw new ErrorHandler({
                success: false,
                message: 'User Not Found.. Please login',
                status: 404
            })
        }
        const checkFriendName = await getFriend(userId, name)
        if (!checkFriendName) {
            const newFriend = await createFriend(name)
            return newFriend
        } else {
            throw new ErrorHandler({
                success: false,
                message: 'Friend with same name already exist',
                status: 400
            })
        }
    } catch (error: any) {
        console.error(error);
        throw new ErrorHandler({
            success: false,
            status: error.status,
            message: error.message,
        });
    }
}

export { addFriendService }