const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          require: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          require: true,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("cart", cartSchema);
