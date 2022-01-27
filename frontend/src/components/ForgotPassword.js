import React, { useState } from "react";
import { Card, Row, Form, Button, Col } from "react-bootstrap";
import { forgotPassword } from "../config/MyServices";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const regForPassword = RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
);

export default function ForgotPassword() {
  const [state, setstate] = useState({
    error: {
      otp: "",
      newpassword: "",
      cpassword: "",
    },
  });
  const [error, setError] = useState({
    newpassword: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
    console.log(state);
    let error = state.error;
    switch (name) {
      case "newpassword":
        error.newpassword = regForPassword.test(value)
          ? ""
          : "Enter valid password";
        break;
      case "cpassword":
        {
          error.cpassword = regForPassword.test(value)
            ? ""
            : "Enter valid password";
          if (state.newpassword != e.target.value) {
            error.cpassword = "password not match";
          }
        }
        break;
    }
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
      let details = {
        email: location.state,
        otp: state.otp,
        newpassword: state.newpassword,
        cpassword: state.cpassword,
      };
      forgotPassword(details).then((res) => {
        if (res.data.err > 0) {
          alert(res.err.msg);
        } else if (res.data.err == 0) {
          alert(res.data.msg);
          navigate("/");
        }
      });
    }
  };
  return (
    <Row className="justify-content-center mt-4 ml-4">
      <Col xs={4}>
        <div
          className="mt-3"
          style={{
            border: "1px",

            boxShadow: "5px 10px 18px #888888 ",
            padding: "10px",
          }}
        >
          <h1>Rocover password</h1>
          <Form>
            <Form.Group controlId="formBasicFname">
              <Form.Label>Verification code</Form.Label>
              <Form.Control
                type="text"
                name="otp"
                placeholder="Enter name"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLname">
              <Form.Label>New password</Form.Label>
              <Form.Control
                type="text"
                name="newpassword"
                placeholder="Enter name"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Text>
              {state.error.newpassword.length > 0 && (
                <span style={{ color: "red" }}>{state.error.newpassword}</span>
              )}
            </Form.Text>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="email"
                name="cpassword"
                placeholder="Enter email"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Text>
              {state.error.cpassword.length > 0 && (
                <span style={{ color: "red" }}>{state.error.cpassword}</span>
              )}
            </Form.Text>
            <Button
              variant="primary"
              type="submit"
              className="mt-2"
              onClick={handleOnClick}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
