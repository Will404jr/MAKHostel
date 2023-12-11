const express = require('express');
const { registerHostel } = require('../controllers/hostel.controller');

const hostelRouter = express.Router();

hostelRouter.post('/hostel', registerHostel);

module.exports = hostelRouter;