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
  emailSend,
  forgotPassword,
  postOrder,
  getOrder,
  getUserById,
  editUser,
  ChangePassword,
} = require("../controller/user_controller.js");

route.post("/login", getUser);
route.post("/register", postUser);
route.post("/profile", getProfile);
route.get("/product", getProduct);
route.post("/addtocart", addItemToCart);
route.post("/address", address);
route.post("/getaddress", getaddress);
route.post("/deleteaddress", deleteAddress);
route.post("/emailOTP", emailSend);
route.post("/forgotpassword", forgotPassword);
route.post("/order", postOrder);
route.post("/getorder", getOrder);
route.get("/getuserbyid/:id", getUserById);
route.put("/edituser/:id", editUser);
route.post("/changepassword", ChangePassword);

module.exports = route;
