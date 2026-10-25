// controllers/paymentController.js
const Razorpay = require('razorpay');
const shortid = require('shortid');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  const { amount, currency } = req.body;
  const numericAmount = Number(amount);

  if (!Number.isInteger(numericAmount) || numericAmount <= 0) {
    return res.status(400).json({
      message: 'Payment amount must be a positive integer in the smallest currency unit.',
    });
  }

  if (currency !== 'INR') {
    return res.status(400).json({ message: 'Only INR payments are supported.' });
  }

  const options = {
    amount: numericAmount,
    currency,
    receipt: shortid.generate(),
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.error('Razorpay order creation failed', error.error || error.message);
    res.status(error.statusCode || 500).json({
      message: error.error?.description || 'Unable to create payment order.',
    });
  }
};
