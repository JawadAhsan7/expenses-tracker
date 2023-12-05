import mongoose, { Schema, model } from 'mongoose';
import { EXPENSE_CATEGORIES } from '../utils/constants.js';

const schema = new Schema({
  name: String,
  date: Date,
  amount: Number,
  category: {
    type: String,
    enum: Object.values(EXPENSE_CATEGORIES)
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default model('Expense', schema);
