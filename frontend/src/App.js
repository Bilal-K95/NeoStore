import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavB from "./components/NavB";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import Registeration from "./components/Registeration";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import UserProfile from "./components/UserProfile";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Address from "./components/Address";
import ChangePassword from "./components/ChangePassword";
import ProductDetails from "./components/ProductDetails";
import AddAddress from "./components/AddAddress";
import DeliverAddress from "./components/DeliverAddress";
import SortByCategory from "./components/SortByCategory";
import EmailOTP from "./components/EmailOTP";
import CardDetails from "./components/CardDetails";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <Container fluid>
      <Router>
        <NavB />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<UserProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/address" element={<Address />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/addaddress" element={<AddAddress />} />
          <Route path="/deliveraddress" element={<DeliverAddress />} />
          <Route path="/sortbycategory/:id" element={<SortByCategory />} />
          <Route path="/emailotp" element={<EmailOTP />} />
          <Route path="/carddetail" element={<CardDetails />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
