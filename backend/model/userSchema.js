const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
});
module.exports = mongoose.model("userSchema", userSchema);
