const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

// userSchema.virtual("password").set(function (password) {
//   this.hash_password = bcrypt.hashSync(password, 10);
//   this.cpassword = bcrypt.hashSync(password, 10);
// });

// userSchema.methods = {
//   authenticate: function (password) {
//     return bcrypt.compareSync(password, this.hash_password);
//   },
// };

module.exports = mongoose.model("user", userSchema);
