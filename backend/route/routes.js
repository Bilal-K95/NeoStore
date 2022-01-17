const express = require("express");
const route = express.Router();
const {
  getUser,
  postUser,
  getProfile,
  getProduct,
  addItemToCart,
  getaddress,
  address,
  deleteAddress,
} = require("../controller/user_controller.js");

route.post("/login", getUser);
route.post("/register", postUser);
route.post("/profile", getProfile);
route.get("/product", getProduct);
route.post("/addtocart", addItemToCart);
route.post("/address", address);
route.post("/getaddress", getaddress);
route.delete("/deleteaddress/:id/", deleteAddress);

module.exports = route;
