import { Router } from 'express';
import { getCurrentUser, updateUser } from '../controllers/userController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/current-user', authenticateUser, getCurrentUser);
router.patch('/update-user', authenticateUser, updateUser);

export default router;