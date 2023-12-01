// npm import
import { Router } from 'express';

// local import
import { register, login } from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;