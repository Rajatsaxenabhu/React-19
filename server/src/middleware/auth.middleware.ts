import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils'; // Import the verifyToken function
import prisma from '../db/postgre'; 
import { JwtPayload } from 'jsonwebtoken';
declare global {
	namespace Express {
		export interface Request {
			user: {
				id: string;
			};
		}
	}
}
interface cstmverify extends JwtPayload {
  id: string;
  username: string;
}

const authMiddleware =  async (req: Request, res: Response, next: NextFunction):Promise<any> => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }

  const verifiedToken = verifyToken(token) as cstmverify;
  if (!verifiedToken) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  const users= await prisma.user.findUnique({
    where: { id: verifiedToken.id},
  });
  console.log(users);
  if (!users) {
    return res.status(403).json({ message: 'User not found' });
  }
  req.user = users
  next(); // Proceed to the next middleware or route handler
};

export default authMiddleware;
