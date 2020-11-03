import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';
import UserControler from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

router.post('/users', UserControler.store);
router.get('/users', authMiddleware, UserControler.index);
router.post('/auth', AuthController.authenticate);
export default router;
