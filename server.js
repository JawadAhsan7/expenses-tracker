// npm imports
import 'dotenv/config';
import express from 'express';

// local imports

// app object returned by express(), the top level function exported by the express module
const app = express();

// middlewares

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// dotenv constants
const PORT = process.env.PORT || 3001;

// listen method listens for a connection on the provided port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});