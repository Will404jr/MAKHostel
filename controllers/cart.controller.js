const Cart = require('../models/cart.model');

async function addToCart(req, res) {
    const { hostelName, regno, email, contact, roomType, bookingFee } = req.body;

    try {
        const newCartItem = new Cart({
            hostelName,
            regno,
            email,
            contact,
            roomType,
            bookingFee,
        });

        const savedCartItem = await newCartItem.save();

        res.status(201).json(savedCartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addToCart,
};