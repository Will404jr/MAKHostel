const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Import bcrypt

const collection = require('../models/login.model');

async function signUppage(req, res) {
    try {
        const { email, password } = req.body;

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with the hashed password
        const newUser = {
            email,
            password: hashedPassword,
        };

        // Save the new user to the database
        const createdUser = await collection.create(newUser);

        res.status(201).json(createdUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    signUppage,
};