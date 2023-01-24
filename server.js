const express = require("express");
const app = express();
app.use(express.json());
const students = require("./routes/datanameRoutes");
app.use("/users", users)


const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {

  res.send("WELCOME TO MY API");

}; 

app.listen(PORT, () => {

  console.log(`server running on http://localhost:${PORT}`);
 
 });
