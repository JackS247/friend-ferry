const express = require("express");

const { loginUser, signUpUser } = require("../controllers/userControllers");

const userRouter = express.Router();

//Login
userRouter.post("/login", loginUser);

//Signup
userRouter.post("/signup", signUpUser);

//get all users from database

module.exports = userRouter;
