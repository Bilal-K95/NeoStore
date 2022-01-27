const mongoose = require("mongoose");

const ForgotPasswordSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
  },
  expireIn: {
    type: Number,
    require: true,
  },
});
module.exports = mongoose.model("forgotpassword", ForgotPasswordSchema);
