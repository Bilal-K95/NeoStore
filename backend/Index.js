const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8888;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const route = require("./route/routes.js");

//db connection
const connectDB = require("./config/db");
connectDB();

app.use(cors());
// const userSchema = require("./model/userSchema");

app.use("/user", route);

app.listen(PORT, (err) => {
  if (err) throw err;
  else {
    console.log(`working on port ${PORT}`);
  }
});
