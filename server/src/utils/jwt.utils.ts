import { Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret
const JWT_EXPIRATION = '1h'; // Token expiration time

// Generate JWT token
export const generateToken = (userId: string, username: string,res:Response) => {
  const token= jwt.sign({ id: userId, username }, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION,
  });
  res.cookie("jwt", token, {maxAge: 3600000, httpOnly: true }).status(200).json({ message: 'Login successful' });
};

// Verify JWT token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.error('Token verification failed:', err);
    return null; // Or you can throw an error
  }
};

// Refresh token logic (in this case, just re-generate a new token)
export const refreshToken = (userId: string, username: string, res:Response) => {
  return generateToken(userId, username,res);
};
