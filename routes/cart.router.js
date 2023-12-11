const express = require('express');
const { addToCart } = require('../controllers/cart.controller');

const cartRouter = express.Router();

cartRouter.post('/cart', addToCart);

module.exports = cartRouter;