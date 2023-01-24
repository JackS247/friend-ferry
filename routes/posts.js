const express = require("express");

const { getAllPosts, createPost } = require("../controllers/postControllers");

const app = express.Router();

app.route("/").get(getAllPosts).post(createPost);

module.exports = app;
