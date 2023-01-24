const express = require("express");
const app = express();
const users = require("./routes/userRoute");
const connectDB = require("./dbinit");
const cors = require("cors");
require("dotenv").config();

// middlewares
app.use(express.json());
app.use(cors());

// express.urlencoded({extended: false})

connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("WELCOME TO MY API");
});
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
