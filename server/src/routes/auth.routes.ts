import { Router } from 'express';
import { login, signup,logout } from '../controller/auth.controller';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

export default router;
