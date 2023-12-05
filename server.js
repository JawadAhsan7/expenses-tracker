// npm imports
import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { query, validationResult, matchedData } from 'express-validator';
import cookieParser from 'cookie-parser';


// local imports
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import expensesRouter from './routes/expensesRouter.js';
import errorsMiddleware from './middlewares/errorsMiddleware.js';

// app object returned by express(), the top level function exported by the express module
const app = express();


// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// middlewares
app.use(express.json()); // to parse application/json (JSON data from forms)
app.use(express.urlencoded({ extended: true })); // to parse application/x-www-form-urlencoded (encoded URL params)
app.use(cookieParser());
app.use(morgan('combined'));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/expenses', expensesRouter);

// test route
app.use('/api/v1/test', query('person').notEmpty().escape(), (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    const data = matchedData(req);
    return res.send(`Hello ${data.person}`);
  }

  res.send({ errors: result.array() });

});

// error handler middleware
app.use(errorsMiddleware);

// dotenv constants
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

try {
  mongoose.connect(MONGO_URL);

  // listen method listens for a connection on the provided port
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}