import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const createJWT = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1d"
  });

  return token;
};

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};