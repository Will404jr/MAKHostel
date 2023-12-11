const path = require('path');
const makhostel = require('../models/hostel.model');

async function registerHostel(req, res) {
    try {
        const hostelData = {...req.body };

        const mhostel = await makhostel.create(hostelData);

        console.log('Hostel registered successfully:', mhostel);

        res.status(200).json({ message: 'Hostel registered successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    registerHostel,
};