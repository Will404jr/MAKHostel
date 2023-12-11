const express = require('express');
const { loginUser } = require('../controllers/login.controller'); // Import the getAlllogins function correctly

const loginRouter = express.Router();

loginRouter.post('/login', loginUser);

module.exports = loginRouter;