const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const makhostel = require('./models/hostel.model'); // Adjust the path accordingly

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // The 'uploads' folder on your server
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// POST route for adding a new hostel
router.post('/addhostel', upload.array('hostelImages', 5), async(req, res) => {
    try {
        const {
            hostelName,
            hostelLocation,
            custodianContact,
            distanceFromUniversity,
            hostelPrice,
            hostelDescription,
            hostelRooms,
            hostelFacilities,
            bookingFee
        } = req.body;

        // Get the file names from the uploaded images
        const hostelImages = req.files.map(file => file.filename);

        // Create a new hostel object
        const newHostel = new makhostel({
            hostelName,
            hostelLocation,
            custodianContact,
            distanceFromUniversity,
            hostelPrice,
            hostelDescription,
            hostelRooms,
            hostelFacilities,
            bookingFee,
            hostelImages
        });

        // Save the hostel to the database
        const savedHostel = await newHostel.save();

        res.status(201).json(savedHostel);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;