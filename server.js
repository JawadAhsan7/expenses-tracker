// npm imports
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

// local imports
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// app object returned by express(), the top level function exported by the express module
const app = express();

// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// middlewares
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

// dotenv constants
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

// listen method listens for a connection on the provided port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});