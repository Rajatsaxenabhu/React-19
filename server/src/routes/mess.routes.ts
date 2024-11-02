import { Router } from 'express';
import authMiddleware from '../middleware/auth.middleware';
import { sendMessage, receiveMessage, sideMessage } from '../controller/mess.controller';

const router = Router();
router.post('/send-message/:id',authMiddleware,sendMessage);
router.post('/:id',authMiddleware,receiveMessage);
router.post('/chats/:id',authMiddleware,sideMessage)

export default router;
