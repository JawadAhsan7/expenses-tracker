import { validationResult, body, param } from 'express-validator';
import User from '../models/User.js';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import mongoose from 'mongoose';
import Expense from '../models/Expense.js';

const withValidationErrors = (validateValues) => {
  return [validateValues, (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      const firstMessage = errorMessages[0];
      if (firstMessage.startsWith('no expense')) throw new NotFoundError(errorMessages);

      throw new BadRequestError(errorMessages);
    }
    next();
  }];
};

export const validateRegisterUserInput = withValidationErrors([
  body('firstName').trim().escape().notEmpty().withMessage('first name is required'),
  body('lastName').trim().escape().notEmpty().withMessage('last name is required'),
  body('email').trim().escape().notEmpty().withMessage('email is required')
    .isEmail().withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password').trim().notEmpty().withMessage('password is required')
    .isLength({ min: 8 }).withMessage('password must be at least 8 characters long')
]);

export const validateLoginUserInput = withValidationErrors([
  body('email').trim().escape().notEmpty().withMessage('email is required')
    .isEmail().withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password required')
]);

export const validateIdParam = withValidationErrors([
  param('expenseId').custom(async (value) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) {
      throw new BadRequestError('invalid MongoDB id');
    }
    const expense = await Expense.findById(value);
    if (!expense) throw new NotFoundError(`no expense found with id: ${value}`);
  })
]);