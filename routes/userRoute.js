// const express = require("express");
// const app = express.Router();

// const {
//   getAllUsers,
//   getOneUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../controllers/userControllers");

// app.route("/").get(getAllUsers).post(createUser);

// app.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

// module.exports = app;

const express = require("express");

const {
  loginUser,
  signUpUser,
  
} = require("../controllers/userControllers");

const userRouter = express.Router();

//Login
userRouter.post("/login", loginUser);

//Signup
userRouter.post("/signup", signUpUser);

//get all users from database

module.exports = userRouter;
