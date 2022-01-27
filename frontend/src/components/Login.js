import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Card,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialButton from "./SocialButton";
import { login } from "../config/MyServices";
import { useNavigate } from "react-router-dom";

const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPassword = RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
);

export default function Login() {
  const [state, setstate] = useState({ error: { email: "", password: "" } });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (sessionStorage.getItem("user") != undefined) {
      sessionStorage.removeItem("user");
    }
    if (sessionStorage.getItem("token") != undefined) {
      sessionStorage.removeItem("token");
    }
  }, []);
  const navigate = useNavigate();
  const handleSocialLogin = (user) => {
    console.log(user);
    if (user) navigate("/home");
  };
  const handleSocialLoginFailure = (err) => {
    if (err) console.log(err);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(state);
    let error = state.error;
    switch (name) {
      case "email":
        error.email = regForEmail.test(value) ? "" : "Enter valid email";
        break;
      case "password":
        error.password = regForPassword.test(value)
          ? ""
          : "Enter valid password";
        break;
    }
    setstate({ ...state, [name]: value });
    setError({ ...error, [name]: value });
  };
  const validate = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  const handleOnClick = (e) => {
    e.preventDefault();

    if (validate(state.error)) {
      const details = {
        email: state.email,
        password: state.password,
      };
      login(details).then((res) => {
        console.log(res.data);
        if (res.data.err > 0) {
          alert(res.data.msg);
        } else if (res.data.err === 0) {
          alert("login successful");

          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("user", state.email);
          navigate("/home");

          //set jwt token to localstorage
          // localStorage.setItem(
          //   "login",
          //   JSON.stringify({ login: true, token: res.token })
          // );
        }
      });
    } else {
      alert("please feel correct login credential");
    }
  };
  return (
    <Container className="mt-4 ">
      <Table>
        <Row className="ml-4">
          <Col xs={5} style={{ borderRightStyle: "solid" }}>
            <SocialButton
              variant="primary"
              size="lg"
              className="btn btn-sm mt-4"
              id="btnsocial"
              provider="facebook"
              appId="240134211515385"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              <Row className="d-flex justify-content-center">
                <i class="fa fa-facebook" style={{ fontSize: "40px" }} />
                <span className="ml-4 mt-2"> Login with facebook</span>
              </Row>
            </SocialButton>

            <SocialButton
              variant="danger"
              size="lg"
              className="btn btn-sm mt-4"
              id="btnsocial"
              provider="google"
              appId="665946475261-cnjf3jbpq9rau27n7jrbjqkmv7464pn9.apps.googleusercontent.com"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              <Row className="d-flex justify-content-center">
                <i class="fa fa-google" style={{ fontSize: "40px" }} />
                <span className="ml-4 mt-2"> Login with gmail</span>
              </Row>
            </SocialButton>

            <Button
              variant="info"
              size="lg"
              className="btn btn-sm mt-4"
              id="btnsocial"
            >
              <Row className="d-flex justify-content-center">
                <i class="fa fa-twitter" style={{ fontSize: "40px" }} />
                <span className="ml-4 mt-2">Login with twitter</span>
              </Row>
            </Button>
          </Col>

          <Col xs={6} className="ml-4">
            <div
              style={{
                border: "1px",

                boxShadow: "5px 10px 18px #888888 ",
                padding: "10px",
              }}
            >
              <h2>Login to NeoStore</h2>

              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleOnChange}
                    name="email"
                  />
                  <Form.Text>
                    {state.error.email.length > 0 && (
                      <span style={{ color: "red" }}>{state.error.email}</span>
                    )}
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={handleOnChange}
                    name="password"
                  />
                  <Form.Text>
                    {state.error.password.length > 0 && (
                      <span style={{ color: "red" }}>
                        {state.error.password}
                      </span>
                    )}
                  </Form.Text>
                </Form.Group>
              </Form>

              <Button variant="primary" onClick={handleOnClick}>
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Table>
      <Row>
        <Col>
          <p className="mt-4" style={{ marginLeft: "380px" }}>
            <Link to="/register"> Register Now </Link>|
            <Link to="/emailotp"> Forgotten?</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
