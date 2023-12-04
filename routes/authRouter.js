// npm import
import { Router } from 'express';

// local import
import { register, login } from '../controllers/authController.js';
import { validateRegisterUserInput } from '../middlewares/validationMiddleware.js';

const router = Router();

router.post('/register', validateRegisterUserInput, register);
router.post('/login', login);

export default router;