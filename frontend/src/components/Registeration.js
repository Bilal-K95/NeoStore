import React, { useState } from "react";
import { Col, Row, Button, Form, Card, Table } from "react-bootstrap";

const regForName = /^[a-zA-Z]{2,100}$/;
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
const regForPassword =
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$";

export default function Registeration() {
  const [error, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
  });
  const [state, setstate] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
    console.log(state);
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
          : "Enter valid password";
        break;
      case "cpassword":
        {
          error.cpassword = regForPassword.test(value)
            ? ""
            : "Enter valid password";
          if (
            state.password != state.cpassword &&
            error.cpassword.length === 0
          ) {
            error.cpassword = "password not match";
          }
        }
        break;
    }
  };

  return (
    <Table className="mt-4" align="center">
      <Row>
        <Col className="mt-4  d-flex align-items-center justify-content-center">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
              <Button
                variant="primary"
                size="lg"
                className="btn"
                id="btnsocial"
                className="mx-4"
              >
                <i class="fa fa-facebook" /> <span>Login with facebook</span>
              </Button>{" "}
              <Button
                variant="primary"
                size="lg"
                className="btn btn-danger"
                id="btnsocial"
              >
                <i class="fa fa-google" /> <span>Login with facebook</span>
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
                        placeholder="First name"
                        name="fname"
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicLname">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lname"
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfPassword">
                      <Form.Label>Confirm password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        name="cpassword"
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfPassword">
                      <Form.Label>Mobile No</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        name="mobile"
                        onChange={handleOnChange}
                      />
                      <Form.Text className="text-muted">Max.10</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Table>
  );
}
