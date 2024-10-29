import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken, verifyToken, refreshToken } from '../utils/jwt.utils';
import prisma from '../db/postgre';
import { promises } from 'dns';

const JWT_SECRET = 'your_jwt_secret'; 


export const signup = async (req: Request, res: Response): Promise<any> => {
  const { username, password, email } = req.body;
  console.log(username, password,email);

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      email,
    },
  });

  res.status(201).json({ message: 'User created successfully', user });
};


// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password,username } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    const token = generateToken(user.id, user.username);
    res.cookie('token', token, { httpOnly: true }).status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message }).clearCookie('token');
  }
};