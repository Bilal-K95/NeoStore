const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/NeoStore";

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log(`Database connect at ${db}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
