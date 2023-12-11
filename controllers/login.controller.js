const UserModel = require('../models/login.model'); // Replace 'user.model' with your actual user model

async function loginUser(req, res) {
    const { email, password } = req.body;
    console.log('Received request with email:', email);

    try {
        // Find the user in the database
        const user = await UserModel.findOne({ email });

        if (!user) {
            console.log('User not found for email:', email);
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Check if the provided password matches the stored password
        const passwordMatch = await user.comparePassword(password);

        if (passwordMatch) {
            console.log('Authentication successful for email:', email);
            return res.status(200).json({ message: 'Authentication successful' });
        } else {
            console.log('Incorrect password for email:', email);
            return res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (error) {
        console.error('Error during authentication:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    loginUser,
};