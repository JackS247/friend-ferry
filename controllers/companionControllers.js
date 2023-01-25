const Companion = require("../models/Companions");
const mongoose = require("mongoose");

const getCompanions = async (req, res) => {
  try {
    const companions = await Companion.find();
    res.json(companions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single companion by id
const getCompanion = async (req, res) => {
  try {
    const companion = await Companion.findById(req.params.id);
    if (!companion) {
      return res.status(404).json({ message: "Companion not found" });
    }
    res.json(companion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new companion
const createCompanion = async (req, res) => {
  try {
    const { name, price, about, category, image } = req.body;
    const newCompanion = await Companion.create({
      name,
      price,
      about,
      category,
      image,
    });

    res.status(201).json(newCompanion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a companion
const updateCompanion = async (req, res) => {
  try {
    const updatedCompanion = await Companion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCompanion) {
      return res.status(404).json({ message: "Companion not found" });
    }
    res.json(updatedCompanion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a companion
const deleteCompanion = async (req, res) => {
  try {
    const deletedCompanion = await Companion.findByIdAndDelete(req.params.id);
    if (!deletedCompanion) {
      return res.status(404).json({ message: "Companion not found" });
    }
    res.json(deleteCompanion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getCompanion,
  getCompanions,
  createCompanion,
  updateCompanion,
  deleteCompanion,
};
