const User = require("../models/user");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message, isItMe: "or is it youuu" });
  }
};

// sign up user
const signUpUser = async (req, res) => {
  const { name, lastName, age, email, password } = req.body;

  try {
    const user = await User.signup(name, lastName, age, email, password);
    //create token
    const token = createToken(user.id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signUpUser };
