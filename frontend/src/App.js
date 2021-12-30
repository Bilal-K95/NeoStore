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

function App() {
  return (
    <Container fluid>
      <NavB />

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
