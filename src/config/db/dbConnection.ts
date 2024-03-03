import { PrismaClient } from "../../../prisma/generated/client";

export const prisma = new PrismaClient({
    log: ["info"]
  });
  
const connectDB = async ()=> {
  return await prisma.$connect();
}

export const disconnectDB = async ()=> {
  await prisma.$disconnect();
}


export const db = async ()=> {
  try {
    await connectDB();
    console.log("connected to database");
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await disconnectDB();
  }
}