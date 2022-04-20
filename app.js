const express = require('express');
const app = express();
const db = require('./db');
// const port = 5000;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController);

app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
    console.log("Server is running.");
  });