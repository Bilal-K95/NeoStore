const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    require: true,
  },
  pincode: {
    type: Number,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("address", addressSchema);
