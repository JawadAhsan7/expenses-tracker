import { validateIdParam } from '../middlewares/validationMiddleware.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import { Router } from 'express';
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
  getSingleExpense,
  updateExpense
} from '../controllers/expensesController.js';

const router = Router();

router.route('/')
  .get(authenticateUser, getAllExpenses)
  .post(authenticateUser, createExpense);

router.route('/:expenseId')
  .get(authenticateUser, validateIdParam, getSingleExpense)
  .patch(authenticateUser, validateIdParam, updateExpense)
  .delete(authenticateUser, validateIdParam, deleteExpense);

export default router;