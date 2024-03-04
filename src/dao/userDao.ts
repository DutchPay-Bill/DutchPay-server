import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";


const getPhone = async (phone_number : string )=> {
    try {
        const existPhone = await prisma.users.findUnique({
            where: { phone_number }
        });
        return existPhone
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

const getEmail = async (email : string )=> {
    try {
        const existEmail = await prisma.users.findUnique({
            where: { email }
        });
        return existEmail
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

const postCreateUser = async (phone : string)=> {
    try {
        const newUser = await prisma.users.create({
            data: { phone_number: phone }
        })

        return newUser
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

const getUserById = async (id: number) => {
    try {
        const user = await prisma.users.findUnique({where: {id}})
        return user
    } catch (error) {
        const err = error as Error
        throw new ErrorHandler({
            success: false,
            status: 500,
            message: err.message,
        });
    } finally {
        await disconnectDB();
    }
}

export { getEmail, postCreateUser, getPhone, getUserById }