// npm import
import { Router } from 'express';

// local import
import { register, login, logout } from '../controllers/authController.js';
import { validateLoginUserInput, validateRegisterUserInput } from '../middlewares/validationMiddleware.js';

const router = Router();

router.post('/register', validateRegisterUserInput, register);
router.post('/login', validateLoginUserInput, login);
router.post('/logout', logout);

export default router;