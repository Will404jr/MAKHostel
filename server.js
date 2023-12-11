const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const helmet = require('helmet');
const multer = require('multer');
const loginRouter = require('./routes/login.router');
const signupRouter = require('./routes/signup.router');
const hostelRouter = require('./routes/hostel.router');
const hostelsRouter = require('./routes/hostels.router');
const cartRouter = require('./routes/cart.router');
const dashboardRouter = require('./routes/dashboard.router');
const hostelRouter1 = require('./uploadImages');
// const UserModel = require('./models/images.model');
// const flutterwave = require('./payment');


const app = express();

app.use(cors());

app.use(helmet());

app.use(bodyParser.json());
app.use('/api', loginRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.set("view engine", "hbs")
// app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


mongoose.connect("mongodb+srv://Junior:test01@cluster0.46lb860.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Database connected");
    })
    .catch((e) => {
        console.error("Database connection failed:", e);
    })

//login api
// app.use(loginRouter);
app.use(signupRouter);

//hostel api
app.use(hostelsRouter);
app.use('/api/hostels', hostelsRouter);
app.use(hostelRouter);

app.use(cartRouter);
app.use(dashboardRouter);

// Create a mongoose model
const UserSchema = new mongoose.Schema({
    image: String,
});

const UserModel = mongoose.model('images', UserSchema);


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Serve the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.post('/upload', upload.array('files'), async(req, res) => {
    console.log('Received image upload request');
    console.log('Files:', req.files);
    // ... rest of the code
    try {
        const images = req.files.map((file) => ({ image: file.filename }));
        const result = await UserModel.insertMany(images);
        res.json(result);
    } catch (error) {
        console.error('Error uploading images:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/getImage', async(req, res) => {
    try {
        const images = await UserModel.find();
        res.json(images);
    } catch (error) {
        console.error('Error retrieving images:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.use('/api/hostels', hostelRouter1);
// flutterwave.makePayment();

app.listen(5000, () => {
    console.log(`App running on port 5000`);
})