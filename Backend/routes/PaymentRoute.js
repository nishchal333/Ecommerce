// routes/paymentRoutes.js
const express = require('express');
const { createOrder } = require('../controllers/PaymentController');
const auth = require('../Middleware/auth');
const router = express.Router();

router.post('/create-order', auth, createOrder);

module.exports = router;
