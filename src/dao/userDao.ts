import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";


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

const postCreateUser = async (email : string, hashedPass: string )=> {
    try {
        const newUser = await prisma.users.create({
            data: { email: email, password: hashedPass }
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

export { getEmail, postCreateUser, getUserById }