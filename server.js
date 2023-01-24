require("dotenv").config();
const connectDB = require("./dbinit");
connectDB();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
// const postsRoute = require("./routes/posts");
const userRouter = require("./routes/userRoute");
// const User = require("./models/User");

// middlewares
app.use(express.json());
app.use(cors());
// app.use("/posts", postsRoute);
app.use("/users", userRouter);

// express.urlencoded({extended: false})

app.get("/", (req, res) => {
  res.send("WELCOME TO MY API");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
