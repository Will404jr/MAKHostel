const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const LogInSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

LogInSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const collection = new mongoose.model("Login", LogInSchema)

module.exports = collection