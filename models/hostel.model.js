const mongoose = require('mongoose');


const Hostel = new mongoose.Schema({
    hostelName: {
        type: String,
        required: true,
    },
    hostelLocation: {
        type: String,
        required: true,
    },
    custodianContact: {
        type: String,
        required: true,
    },
    distanceFromUniversity: {
        type: String,
    },
    hostelPrice: {
        type: String,
        required: true,
    },
    hostelDescription: {
        type: String,
    },
    hostelRooms: {
        type: [String],
        required: true,
    },
    hostelFacilities: {
        type: [String],
    },
    bookingFee: {
        type: Number,
        required: true,
    },
    hostelImages: {
        type: [String],
    },
});

const makhostel = mongoose.model('hostel', Hostel);

module.exports = makhostel;