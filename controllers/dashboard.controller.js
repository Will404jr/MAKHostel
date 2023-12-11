const CartModel = require('../models/cart.model');

async function getDashboardData(req, res) {
    try {
        const dashboardData = await CartModel.find({});
        res.status(200).json(dashboardData);
    } catch (error) {
        console.error('Error fetching dashboard data:', error.message);
        res.status(500).json({ message: error.message });
    }
}

async function getHostelData(req, res) {
    const { hostelName } = req.params;

    try {
        const hostelData = await CartModel.find({ hostelName });
        res.status(200).json(hostelData);
    } catch (error) {
        console.error(`Error fetching data for hostel ${hostelName}:`, error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getDashboardData,
    getHostelData,
};