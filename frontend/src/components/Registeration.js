import React, { useState } from "react";
import { Col, Row, Button, Form, Card, Table } from "react-bootstrap";
import { register } from "../config/MyServices";
import { useNavigate } from "react-router-dom";
import SocialButton from "./SocialButton";
const regForName = /^[a-zA-Z]{2,100}$/;
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
const regForPassword = RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
);

export default function Registeration() {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    error: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
      mobile: "",
    },
  });
  const [error, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let error = state.error;
    switch (name) {
      case "fname":
        error.fname = regForName.test(value)
          ? ""
          : "Name should contain only letters and minimum length should be 2 characters";
        break;
      case "lname":
        error.lname = regForName.test(value)
          ? ""
          : "Name should contain only letters and minimum length should be 2 characters";
        break;
      case "email":
        error.email = regForEmail.test(value) ? "" : "Enter Valid Email";
        break;
      case "password":
        error.password = regForPassword.test(value)
          ? ""
          : "password Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
        break;
      case "cpassword":
        {
          error.cpassword = regForPassword.test(value)
            ? ""
            : "Enter valid password";
          if (state.password != e.target.value) {
            error.cpassword = "password not match";
          }
        }
        break;
      case "mobile":
        error.mobile = regForPhone.test(value)
          ? ""
          : "Enter valid mobile number";
    }
    setstate({ ...state, [name]: value });
    setError({ ...error, [name]: value });

    console.log(error);
  };
  const validate = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (validate(state.error)) {
      let details = {
        fname: state.fname,
        lname: state.lname,
        email: state.email,
        password: state.password,
        cpassword: state.cpassword,
        mobile: state.mobile,
      };
      register(details).then((res) => {
        if (res.data.err > 0) {
          alert("email alredy exist");
        } else {
          alert("registration succesful");
          console.log(res.data);
          navigate("/");
        }
      });
    } else {
      alert("please Enter correct detail");
    }
  };

  return (
    <Table className="mt-4" align="center">
      <Row>
        <Col className="mt-4  d-flex align-items-center justify-content-center">
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 10px 18px #888888 ",
              padding: "10px",
            }}
          >
            <Button variant="primary" size="lg" className="btn" id="btnsocial">
              <i class="fa fa-facebook" /> <span>Login with facebook</span>
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="btn btn-danger ml-2"
              id="btnsocial"
            >
              <i class="fa fa-google" /> <span>Login with google</span>
            </Button>

            {/* <Row className="mt-4  d-flex align-items-center justify-content-center"> */}
            <Row className="mt-4">
              <Col>
                <Form>
                  <h2>Register to NeoSTORE</h2>
                  <Form.Group controlId="formBasicFname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fname"
                      autocomplete="off"
                      onChange={handleOnChange}
                    />

                    {state.error.fname.length > 0 && (
                      <span style={{ color: "red" }}>{state.error.fname}</span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formBasicLname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lname"
                      autocomplete="off"
                      onChange={handleOnChange}
                    />
                    {state.error.lname.length > 0 && (
                      <span style={{ color: "red" }}>{state.error.lname}</span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      autocomplete="off"
                      onChange={handleOnChange}
                    />
                    {state.error.email.length > 0 && (
                      <span style={{ color: "red" }}>{state.error.email}</span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      autocomplete="off"
                      onChange={handleOnChange}
                    />
                    {state.error.password.length > 0 && (
                      <span style={{ color: "red" }}>
                        {state.error.password}
                      </span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formBasicConfPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      name="cpassword"
                      autocomplete="off"
                      onChange={handleOnChange}
                    />
                    {state.error.cpassword.length > 0 && (
                      <span style={{ color: "red" }}>
                        {state.error.cpassword}
                      </span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formBasicConfPassword">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      autocomplete="off"
                      onChange={handleOnChange}
                    />
                    {state.error.mobile.length > 0 && (
                      <span style={{ color: "red" }}>{state.error.mobile}</span>
                    )}
                    <Form.Text className="text-muted">Max.10</Form.Text>
                  </Form.Group>

                  <Button
                    variant="primary"
                    onClick={handleOnClick}
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Table>
  );
}
