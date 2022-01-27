import React, { useState } from "react";
import { Col, Row, Card, Form, Button, Container } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { changePassword } from "../config/MyServices";
import { useNavigate } from "react-router-dom";

const regForPassword = RegExp(
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
);

export default function ChangePassword() {
  const [state, setState] = useState({
    error: {
      oldpassword: "",
      newpassword: "",
      cpassword: "",
    },
  });
  const [error, setError] = useState({
    oldpassword: "",
    newpassword: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  let temp = sessionStorage.getItem("user");
  console.log(temp);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    let error = state.error;
    switch (name) {
      case "oldpassword":
        error.oldpassword = regForPassword.test(value)
          ? ""
          : "Enter valid password";
        break;
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
        email: temp,
        oldpassword: state.oldpassword,
        newpassword: state.newpassword,
        cpassword: state.cpassword,
      };

      const token = sessionStorage.getItem("token");
      console.log(token);
      if (token) {
        changePassword(details).then((res) => {
          if (res.data.err > 0) {
            alert(res.data.msg);
          } else {
            if (res.data.err == 0) {
              alert(res.data.msg);
            }
          }
        });
      } else {
        navigate("/");
      }
    }
  };
  return (
    <Container>
      <UserProfile />

      {
        <Row>
          <Col xs={4}></Col>

          <Col xs={6} className="ml-4" style={{ marginTop: "-438px" }}>
            <div
              className="mt-3"
              style={{
                border: "1px",

                boxShadow: "5px 10px 18px #888888 ",
                padding: "10px",
              }}
            >
              <h3>Change password</h3>
              <hr />
              <Form>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter old password</Form.Label>
                  <Form.Control
                    type="email"
                    name="oldpassword"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Text>
                  {state.error.oldpassword.length > 0 && (
                    <span style={{ color: "red" }}>
                      {state.error.oldpassword}
                    </span>
                  )}
                </Form.Text>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter new password</Form.Label>
                  <Form.Control
                    type="email"
                    name="newpassword"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Text>
                  {state.error.newpassword.length > 0 && (
                    <span style={{ color: "red" }}>
                      {state.error.newpassword}
                    </span>
                  )}
                </Form.Text>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type="email"
                    name="cpassword"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Text>
                  {state.error.cpassword.length > 0 && (
                    <span style={{ color: "red" }}>
                      {state.error.cpassword}
                    </span>
                  )}
                </Form.Text>
                <Button className="mt-3" onClick={handleOnClick}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      }
    </Container>
  );
}
