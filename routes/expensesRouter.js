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
  .get(getSingleExpense)
  .patch(updateExpense)
  .delete(deleteExpense);

export default router;