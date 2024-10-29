import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to PostgreSQL successfully!');
  } catch (err) {
    console.error('Connection to PostgreSQL failed:', err);
  }
};

export default prisma;
