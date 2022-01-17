const userSchema = require("../model/userSchema");
const productSchema = require("../model/ProductSchema");
const addressSchema = require("../model/AddressSchema");
const Cart = require("../model/CartSchema");
const CartSchema = require("../model/CartSchema");
const jwt = require("jsonwebtoken");
const AddressSchema = require("../model/AddressSchema");
const jwtSecret = "asd889asdas5656asdasbilal";

//jwt token
function autenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (token == null) {
    return res.json({ err: 1, msg: "Token not match" });
  } else {
    jwt.verify(token, jwtSecret, (err, data) => {
      if (err) {
        return res.json({ err: 1, msg: "Token incorrect" });
      } else {
        return console.log("Match");
        next();
      }
    });
  }
}

//login form
function getUser(req, res) {
  userSchema.findOne({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    else {
      if (data != null) {
        if (data.password === req.body.password) {
          let payload = {
            email: data.email,
          };
          const token = jwt.sign(payload, jwtSecret, { expiresIn: 3600000 });
          res.json({ err: 0, msg: "login success full", token: token });
        } else {
          res.send({ err: 1, msg: "incorrect password" });
        }
      } else {
        res.send({ err: 2, msg: "user not found" });
      }
    }
  });
  // console.log(email);
}

function postUser(req, res) {
  const data = req.body;
  userSchema.findOne({ email: req.body.email }).then(function (user) {
    if (user) {
      return res.json({ err: 1, msg: "email already exist" });
    } else {
      let inf = new userSchema({ ...data });
      inf.save((err) => {
        if (err) throw err;
        else {
          console.log("userprofie", req.body);
          res.send(req.body);
        }
      });
    }
  });
}
function getProfile(req, res) {
  userSchema.findOne({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    if (data != null) {
      console.log(data);
      res.send(data);
    }
  });
}
function getProduct(req, res) {
  console.log(req.query);
  productSchema.find(req.query, (err, data) => {
    if (err) throw err;

    res.send(data);
    // console.log(data);
  });
}

function addItemToCart(req, res) {
  console.log(req.body);
  CartSchema.findOne({ user: req.body.user }).exec((err, cart) => {
    if (err) return res.status(400).json({ err });
    if (cart) {
      //if cart already exist then update cart
      console.log(req.body.cartItems);
      console.log(cart);
      const product = req.body.cartItems.product;
      const item = cart.cartItems.find((c) => c.product == product);
      if (item) {
        CartSchema.findOneAndUpdate(
          { user: req.body.user, "cartItems.product": product },
          {
            $set: {
              cartItems: {
                ...req.body.cartItems,
                quantity: item.quantity + req.body.cartItems.quantity,
              },
            },
          }
        ).exec((err, _cart) => {
          if (err) return res.status(400).json({ err });
          if (_cart) return res.status(200).json({ cart: _cart });
        });
      } else {
        CartSchema.findOneAndUpdate(
          { user: req.body.user },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        ).exec((err, _cart) => {
          if (err) return res.status(400).json({ err });
          if (_cart) return res.status(200).json({ cart: _cart });
        });
      }
    } else {
      // if cart not exist then create a new cart
      const cart = new CartSchema({
        user: req.body.user,
        cartItems: [req.body.cartItems],
      });
      cart.save((err, cart) => {
        if (err) return res.status(400).json({ err });
        if (cart) return res.status(201).json({ cart });
      });
    }
  });
}

function address(req, res) {
  console.log(req.body);
  var crypto = require("crypto");
  var id = crypto.randomBytes(20).toString("hex");
  let data = {
    _id: id,
    address: req.body.address,
    pincode: req.body.pincode,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
  };
  userSchema.findOneAndUpdate(
    { email: req.body.email },
    { $push: { address: data } },
    (err, data) => {
      if (err) throw err;
      if (data) {
        res.json({ err: 0, msg: "Address added" });
      }
    }
  );
}

function getaddress(req, res) {
  userSchema.find({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    if (data != null) {
      console.log(data);
      res.send(data);
    }
  });
}

function deleteAddress(req, res) {
  console.log(req.params.id);
  userSchema
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        err: 0,
        msg: "Deleted!",
      });
    })
    .catch((err) => {
      res.status(400).json({ err: err });
    });
}

// app.delete("/api/stuff/:id", (req, res, next) => {
//   Thing.deleteOne({ _id: req.params.id })
//     .then(() => {
//       res.status(200).json({
//         message: "Deleted!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// });

// console.log(req.body);

// addressSchema.find({ }),
//   (err, data) => {
//     if (err) {
//       return res.status(400).json({
//         err: 1,
//         msg: "your request could not be proceed please try again later",
//       });
//     } else {
//       res.status(200).json({ addresses: data });
//     }
//   };

module.exports = {
  getUser,
  postUser,
  getProfile,
  getProduct,
  addItemToCart,
  autenticateToken,
  address,
  getaddress,
  deleteAddress,
};
