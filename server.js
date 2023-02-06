require("dotenv").config();
const connectDB = require("./dbinit");
connectDB();
const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT;
const cors = require("cors");
// const postsRoute = require("./routes/posts");
const userRouter = require("./routes/userRoute");
const companionRouter = require("./routes/companionRoute");
// const User = require("./models/User");

// middlewares
app.use(express.json());
app.use(cors());
// app.use("/posts", postsRoute);
app.use("/users", userRouter);
app.use("/companions", companionRouter);

// express.urlencoded({extended: false})

app.get("/", (req, res) => {
  res.send("WELCOME TO MY API");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
