const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    require: true,
  },
  product_image: {
    type: String,
    require: true,
  },
  product_desc: {
    type: String,
    require: true,
  },
  product_rating: {
    type: String,
    require: true,
  },
  product_quantity: {
    type: Number,
    require: true,
    default: 1,
  },

  product_producer: {
    type: String,
    require: true,
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
  product_stock: {
    type: String,
    require: true,
  },
  product_dimension: {
    type: String,
    require: true,
  },
  product_material: {
    type: String,
    require: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    require: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  Product_subImages: [
    {
      subImage_1: {
        type: String,
        require: true,
      },
      subImage_2: {
        type: String,
        require: true,
      },
      subImage_3: {
        type: String,
        require: true,
      },
      subImage_3: {
        type: String,
        require: true,
      },
    },
  ],
});
module.exports = mongoose.model("product", productSchema);
