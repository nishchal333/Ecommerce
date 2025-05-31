const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth')
const { registerUser ,loginUser} = require('../controllers/userController');
const { body } = require('express-validator');
;
  

// Register route with validation
router.post(
    '/register',
    [
      body('name').notEmpty().withMessage('Name is required'),
body('email').isEmail().withMessage('Please provide a valid email'),
body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')

    ],
    registerUser
  );
  

  // Login route with validation
  router.post(
    '/login',
    [
      body('email', 'Please include a valid email').isEmail(),
      body('password', 'Password is required').exists(),
    ],
    loginUser
  );
  



module.exports = router;
