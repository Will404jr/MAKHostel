const express = require('express');
const { getDashboardData, getHostelData } = require('../controllers/dashboard.controller');

const dashboardRouter = express.Router();

dashboardRouter.get('/dashboard', getDashboardData);
dashboardRouter.get('/dashboard/:hostelName', getHostelData);

module.exports = dashboardRouter;