import ErrorHandler from '../utils/errorHandler';
import { getUserById } from '../dao/userDao';
import { createFriend, getFriendByName } from '../dao/friendDao';

const addFriendService = async (userId: number, name: string, friends_photo: string) => {
    try {
      console.log('user id ',userId )
        const user = await getUserById(userId)
        if (!user) {
            throw new ErrorHandler({
                success: false,
                message: 'User Not Found.. Please login',
                status: 404
            })
        }
        const checkFriendName = await getFriendByName(userId, name)
        if (!checkFriendName) {
            const newFriend = await createFriend(userId, name, friends_photo)
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