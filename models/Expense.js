import { Schema, model } from 'mongoose';
import { EXPENSE_CATEGORIES } from '../utils/constants.js';

const schema = new Schema({
  expenseName: String,
  time: Date,
  amount: Number,
  category: {
    type: String,
    enum: Object.values(EXPENSE_CATEGORIES)
  }
});

export default model('Expense', schema);
