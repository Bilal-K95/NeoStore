const express = require("express");
const mongoose = require("mongoose");
const PORT = 8888;
const app = express();

//db connection
const connectDB = require("./config/db");
connectDB();

const userSchema = require("./model/userSchema");

app.post("/", (req, res) => {
  let inf = new userSchema({ fname: "bilal" });
  inf.save((err) => {
    if (err) throw err;
  });
  res.send("ok");
});
app.get("/", (req, res) => {
  userSchema.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  else {
    console.log(`working on port ${PORT}`);
  }
});
