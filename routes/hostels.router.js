const express = require('express');
const { getAllHostels, getHostelByName } = require('../controllers/hostels.controller');

const hostelsRouter = express.Router();

hostelsRouter.get('/hostels', getAllHostels);
hostelsRouter.get('/hostels/:hostelName', getHostelByName);

module.exports = hostelsRouter;