// controllers/paymentController.js
const Razorpay = require('razorpay');
const shortid = require('shortid');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: amount * 1    , // amount in the smallest currency unit
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
    res.status(500).send(error);
  }
};
