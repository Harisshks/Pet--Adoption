require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const dbConn = require("./config/db");
const Pets = require("./routes/petRoute");


const port = process.env.PORT || 8888;
app.use("/pets", Pets);

app.get("/", (req, res) => {
  res.status(400).json("Heyyy");
});

app.listen(port, () => {
  console.log(`Server running in : ${port}`);
});
