const express = require("express")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const { body, validationResult } = require('express-validator');


// Function to generate JWT token
const generateToken = (userId) => {
  const payload = {
    user: {
      id: userId,
    },
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '50h' });

};

// Controller to register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // validotor
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Generate JWT token
    const token = generateToken(user.id);

    res.json({ token });
  } catch (err) {
    console.error('Error during user registration:', err.message);

    res.status(500).send('Server error');
  }
};

// Controller to login a user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  // valadator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'user not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'incorect username or password' });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


