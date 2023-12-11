const hostelsModel = require('../models/hostel.model');

async function getAllHostels(req, res) {
    try {
        const hostels = await hostelsModel.find({});
        res.status(200).json(hostels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getHostelByName(req, res) {
    const { hostelName } = req.params; // Change name to hostelName

    try {
        const hostel = await hostelsModel.findOne({
            hostelName: new RegExp('^' + hostelName + '$', 'i'),
        });

        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }

        res.status(200).json(hostel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAllHostels,
    getHostelByName,
};