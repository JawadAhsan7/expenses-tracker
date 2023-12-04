import { StatusCodes } from 'http-status-codes';
import Expense from '../models/Expense.js';

export const createExpense = async (req, res) => {
  const { name, date, amount, category } = req.body;
  const createdExpense = await Expense.create({ name, date, amount, category });
  res.status(StatusCodes.CREATED).json({ msg: 'expense created', createdExpense });
};

export const getAllExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.status(StatusCodes.OK).json({ count: expenses.length, expenses });
};

export const getSingleExpense = async (req, res) => {
  const { expenseId } = req.params;
  const expense = await Expense.findById(expenseId);
  res.status(StatusCodes.OK).json({ expense });
};

export const updateExpense = async (req, res) => {
  const { expenseId } = req.params;
  const { name, date, amount, category } = req.body;
  const expense = await Expense.findByIdAndUpdate(expenseId, { name, date, amount, category }, {
    returnDocument: 'after'
  });

  res.status(StatusCodes.OK).json({ msg: 'expense updated', expense });
};

export const deleteExpense = async (req, res) => {
  const { expenseId } = req.params;
  await Expense.findByIdAndDelete(expenseId);
  res.status(StatusCodes.OK).json({ msg: 'expense deleted' });
};