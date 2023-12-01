import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      role: await User.countDocuments() === 0 ? 'admin' : 'user'
    });
    return res.status(StatusCodes.OK).json({ msg: 'user created', createdUser });
  }

  return res.status(StatusCodes.FORBIDDEN).json({ msg: 'user already exists' });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'invalid credentials' });
  }

  return res.status(StatusCodes.OK).json({ msg: 'user logged in', user });
};