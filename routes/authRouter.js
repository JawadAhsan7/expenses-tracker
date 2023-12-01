// npm import
import express from 'express';

// local import
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;