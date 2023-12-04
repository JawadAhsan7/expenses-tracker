import { validateIdParam } from '../middlewares/validationMiddleware.js';
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
  .get(getAllExpenses)
  .post(createExpense);

router.route('/:expenseId')
  .get(validateIdParam, getSingleExpense)
  .patch(validateIdParam, updateExpense)
  .delete(validateIdParam, deleteExpense);

export default router;