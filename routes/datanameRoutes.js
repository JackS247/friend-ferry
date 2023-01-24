const express = require("express");
const app = express.Router();

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/studentControllers");

app.route("/").get(getAllUsers).post(createUser);

app.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = app;
