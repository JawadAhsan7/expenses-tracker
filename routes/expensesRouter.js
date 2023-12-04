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
  .patch(updateExpense)
  .delete(deleteExpense);

export default router;