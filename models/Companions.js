const mongoose = require("mongoose");

const { Schema } = mongoose;

const CompanionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: [{ type: String }],

  category: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Companions", CompanionSchema);
