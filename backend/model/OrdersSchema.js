const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },

  product_name: {
    type: String,
    require: true,
  },
  product_image: {
    type: String,
    require: true,
  },

  product_quantity: {
    type: Number,
    require: true,
    default: 1,
  },

  product_cost: {
    type: Number,
    require: true,
  },
  product_category: {
    type: String,
    require: true,
  },
  product_color: {
    type: String,
    require: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("ord", orderSchema);
