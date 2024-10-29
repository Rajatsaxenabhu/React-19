import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils'; // Import the verifyToken function

interface AuthRequest extends Request {
  user?: { id: number; username: string }; // Define a user property
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }

  const verifiedToken = verifyToken(token);
  if (!verifiedToken) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  req.user = { id: verifiedToken.id, username: verifiedToken.username };
  next(); // Proceed to the next middleware or route handler
};

export default authMiddleware;
