import e from "express";
import { disconnectDB, prisma } from "../config/db/dbConnection";
import ErrorHandler from "../utils/errorHandler";
import { use } from "passport";


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
        await prisma.users.findUnique({
            where: { email }
        });
        const user = await prisma.users.findUnique({
            where: {email: email}
        })
        return user?.id
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

const postCreateUserPhone = async (phone : string)=> {
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


const postCreateUserGoogle = async (fullname: string, email : string)=> {
    try {
        await prisma.users.create({
            data: {fullname: fullname, email: email }
        })
        const user = await prisma.users.findUnique({
            where:{email: email} 
        })

        return {
            userId: user?.id
        }
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

export { getEmail, postCreateUserPhone, getPhone, getUserById, postCreateUserGoogle }