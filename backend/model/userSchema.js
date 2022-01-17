const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  address: { type: Array },
});
module.exports = mongoose.model("user", userSchema);
