import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";

const createFriend = async (userId: number, name : string, )=> {
    try {
        const newFriend = await prisma.friends.create({
            data: {user_id: userId, friends_name: name }
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

const getFriendByName = async (userId: number, name : string)=> {
    try {
        const searchFriend = await prisma.friends.findFirst({
            where:{user_id: userId, friends_name: name} 
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

const getFriendById = async (userId: number, friendId: number)=> {
    try {
        const searchFriendById = await prisma.friends.findFirst({
            where:{user_id: userId, id: friendId} 
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