const userSchema = require("../model/userSchema");
const productSchema = require("../model/ProductSchema");
const addressSchema = require("../model/AddressSchema");
const Cart = require("../model/CartSchema");
const CartSchema = require("../model/CartSchema");
const jwt = require("jsonwebtoken");
const AddressSchema = require("../model/AddressSchema");
const jwtSecret = "asd889asdas5656asdasbilal";
const ForgotPassword = require("../model/ForgotPassword");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const OrderSchema = require("../model/OrderSchema");

//jwt token
// function autenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   console.log(token);
//   if (token == null) {
//     return res.json({ err: 1, msg: "Token not match" });
//   } else {
//     jwt.verify(token, jwtSecret, (err, data) => {
//       if (err) {
//         return res.json({ err: 1, msg: "Token incorrect" });
//       } else {
//         return console.log("Match");
//         next();
//       }
//     });
//   }
// }

//login form
function getUser(req, res) {
  console.log(req.body);
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
  // userSchema.findOne({ email: req.body.email }, (err, data) => {
  //   if (err) throw err;
  //   else {
  //     if (data != null) {
  //       if (data.password == req.body.password) {
  //         let payload = {
  //           email: data.email,
  //         };
  //         const token = jwt.sign(payload, jwtSecret, { expiresIn: 3600000 });
  //         res.json({ err: 0, msg: "login success full", token: token });
  //       } else {
  //         res.send({ err: 1, msg: "incorrect password" });
  //       }
  //     } else {
  //       res.send({ err: 2, msg: "user not found" });
  //     }
  //   }
  // });
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
  let id = Math.random();

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
  console.log(req.body.id);

  console.log(req.body.item);
  userSchema
    .findOneAndUpdate(
      { _id: req.body.item },
      { $pull: { address: { _id: req.body.id } } }
    )
    .then((res) => {
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

//nodemailer

const emailSend = (req, res) => {
  console.log(req.body.email);
  userSchema.findOne({ email: req.body.email }, (err, data) => {
    if (data != null) {
      let otpCode = Math.floor(Math.random() * 10000 + 1);
      let otpData = new ForgotPassword({
        email: req.body.email,
        code: otpCode,
        expiresIn: new Date().getTime() + 300 * 1000,
      });
      otpData.save((err) => {
        if (err) throw err;
        else {
          let transport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            tls: {
              rejectUnauthorized: false,
            },
            auth: {
              user: "bilalshaikh.fake.acc@gmail.com",
              pass: "@@9764641992",
            },
          });
          transport.sendMail({
            from: "bilalshaikh.fake.acc@gmail.com",
            to: "bilalshaikh.fake.acc@gmail.com",
            subject: "test mail",
            text: "test mail from nodemailer",
            html: `your password reset otp is ${otpCode}`,
          }),
            (err, res) => {
              if (err) {
                console.log("err");
              } else {
                console.log("mail send successfully");
              }
            };
        }
      });
      res
        .status(200)
        .json({ err: 0, msg: "OTP send success full please check email" });
    } else {
      // res.status(400).json({ err: 1, msg: "email not exist" });
      console.log("not exist");
      res.json({ err: 1, msg: "user not exist" });
    }
  });
};

const forgotPassword = (req, res) => {
  console.log(req.body);
  console.log(req.body.email);
  ForgotPassword.find(
    {
      email: req.body.email,
      code: req.body.otp,
    },
    (err, data) => {
      if (err) throw err;
      else {
        console.log(data);
        if (data != null) {
          console.log(data);
          userSchema.findOneAndUpdate(
            { email: req.body.email },
            {
              $set: {
                password: req.body.newpassword,
                cpassword: req.body.cpassword,
              },
            },
            (err, data) => {
              console.log(data);
            }
          );
        }
      }
    }
  );
};

const ChangePassword = (req, res) => {
  userSchema.findOne({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    else {
      if (data.password == req.body.oldpassword) {
        userSchema.findOneAndUpdate(
          { email: req.body.email },
          {
            $set: {
              password: req.body.newpassword,
              cpassword: req.body.cpassword,
            },
          },
          (err, data) => {
            if (err) throw err;
          }
        );
        res.json({ err: 0, msg: "password change successfully" });
      } else {
        res.json({ err: 1, msg: "please enter correct old password" });
      }
    }
  });
};

const postOrder = (req, res) => {
  console.log(req.body);
  let inf = new OrderSchema(req.body);
  inf.save((err) => {
    if (err) throw err;
    else {
      console.log("userprofie", req.body);
      res.send(req.body);
    }
  });
};

const getOrder = (req, res) => {
  OrderSchema.find({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    else {
      if (data != null) {
        res.send(data);
      }
    }
  });

  // OrderSchema.findOneAndUpdate({ email: req.body.email }, (err, data) => {
  //   if (err) {
  //     res.json({ err: 1, msg: "please login first" });
  //   } else {
  //     if (data != null) {
  //       console.log(data);
  //       res.send(data);
  //     }
  //   }
  // });
};

//get user by id
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userSchema.findById(id);
    res.json(user);
  } catch (err) {
    if (err) throw err;
  }
};

//edit user
const editUser = async (req, res) => {
  const user = req.body;
  const editUser = new userSchema(user);
  try {
    await userSchema.updateOne({ _id: req.params.id }, editUser);
    res.json(editUser);
  } catch (err) {
    res.json({ err: 1, msg: "something went wrong" });
  }
};

module.exports = {
  getUser,
  postUser,
  getProfile,
  getProduct,
  addItemToCart,
  address,
  getaddress,
  deleteAddress,
  emailSend,
  forgotPassword,
  postOrder,
  getOrder,
  getUserById,
  editUser,
  ChangePassword,
};
