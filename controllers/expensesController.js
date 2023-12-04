import { StatusCodes } from 'http-status-codes';
import Expense from '../models/Expense.js';

export const createExpense = async (req, res) => {
  const { name, date, amount, category } = req.body;
  const createdExpense = await Expense.create({ name, date, amount, category });
  res.status(StatusCodes.CREATED).json({ msg: 'expense created', createdExpense });
};

export const getAllExpenses = async (req, res) => {
  res.send('getAllExpenses Controller');
};

export const getSingleExpense = async (req, res) => {
  res.send('getSingleExpense Controller');
};

export const updateExpense = async (req, res) => {
  res.send('updateExpense Controller');
};

export const deleteExpense = async (req, res) => {
  res.send('deleteExpense Controller');
};