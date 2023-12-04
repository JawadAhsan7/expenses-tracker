import { validationResult, body } from 'express-validator';
import User from '../models/User.js';
import { BadRequestError } from '../errors/customErrors.js';

const withValidationErrors = (validateValues) => {
  return [validateValues, (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);

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