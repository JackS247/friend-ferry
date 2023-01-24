const Students = require("../models/user");

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
    const student = await User.findById(req.params.id);
    res.status(200).json({
      student,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    console.log("req.body:", req.body);
    const student = await User.create({ name, lastName, email, password });
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
    const student = await User.findByIdandUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Users.findByIdandDelete(req.params.id);
    res.status(200).json({
      response: "User eliminated successfully",
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
  updateUsers,
  deleteUser,
};
