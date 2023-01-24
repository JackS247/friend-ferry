const Users = require("../models/User.js");
const mongoose = require("mongoose");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    console.log("req.body:", req.body);
    const user = await Users.create({ name, lastName, email, password });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await Users.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await Users.findOneAndDelete(req.params.id);
    res.status(200).json({
      response: "User eliminated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
