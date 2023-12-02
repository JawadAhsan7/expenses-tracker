import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import { comparePasswordHash, hashPassword } from '../utils/hashPassword.js';
import { createJWT } from '../utils/webtoken.js';

export const register = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    await User.create({
      firstName,
      lastName,
      email,
      password: await hashPassword(password),
      role: await User.countDocuments() === 0 ? 'admin' : 'user'
    });
    return res.status(StatusCodes.OK).json({ msg: 'user created' });
  }

  return res.status(StatusCodes.FORBIDDEN).json({ msg: 'user already exists' });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const isValidUser = user && await comparePasswordHash(password, user.password);

  if (!isValidUser) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'invalid credentials' });
  }

  const token = createJWT({
    userId: user._id,
    role: user.role
  });

  res.cookie('jwtToken', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 86400000),
    secure: process.env.NODE_ENV === 'production'
  });

  return res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};