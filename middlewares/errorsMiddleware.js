import { StatusCodes } from 'http-status-codes';

const errorsMiddleware = (err, req, res, next) => {
  console.log(err);

  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'Something went wrong, please try later';

  res.statusCode(statusCode).json({ msg });
};

export default errorsMiddleware;