const express = require('express');
const { signUppage } = require('../controllers/signup.controller'); // Import the getAlllogins function correctly

const signupRouter = express.Router();

signupRouter.post('/signup', signUppage);

module.exports = signupRouter;