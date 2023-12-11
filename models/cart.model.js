const mongoose = require('mongoose');

const Cart = new mongoose.Schema({
    hostelName: {
        type: String,
        required: true,
        index: true,
    },
    regno: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    roomType: {
        type: String,
        required: true,
    },
    bookingFee: {
        type: Number,
        required: true,
    },

});

const cart = new mongoose.model("cart", Cart)

module.exports = cart;