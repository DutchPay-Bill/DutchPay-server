import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createFriend = async (user_id: number, name : string, friends_photo: string)=> {
    try {
        const newFriend = await prisma.friends.create({
            data: {user_id: user_id, friends_name: name, friends_photo: friends_photo }
        })

        return newFriend
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

const getFriendByName = async (user_id: number, name : string)=> {
    try {
        const searchFriend = await prisma.friends.findFirst({
            where:{user_id: user_id, friends_name: name} 
        })

        return searchFriend
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

const getFriendById = async (user_id: number, friendId: number)=> {
    try {
        const searchFriendById = await prisma.friends.findFirst({
            where:{user_id: user_id, id: friendId} 
        })

        return searchFriendById
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

export { createFriend, getFriendByName, getFriendById }