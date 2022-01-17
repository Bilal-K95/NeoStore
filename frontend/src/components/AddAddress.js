import React, { useState, useEffect } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { address } from "../config/MyServices";
import { useNavigate } from "react-router-dom";

export default function AddAddress() {
  const [state, setstate] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    let temp = sessionStorage.getItem("user");
    console.log(temp);
    let details = {
      email: temp,
      address: state.address,
      pincode: state.pincode,
      city: state.city,
      state: state.state,
      country: state.country,
    };
    // post address
    address(details).then((res) => {
      if (res.data.err == 0) {
        console.log(res.data);
        setstate(res.data);
        navigate("/address");
      }
    });
  };
  return (
    <Container>
      <UserProfile />
      <Row>
        <Col xs={4}></Col>

        <Col xs={6} style={{ marginTop: "-438px" }} className="ml-4">
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 10px 18px #888888 ",
              padding: "10px",
            }}
          >
            <h3>Address</h3>

            <hr />

            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  size="sm"
                  name="address"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="pincode"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="email"
                  name="city"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="email"
                  name="state"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="email"
                  name="country"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Button onClick={handleOnClick}>Add</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
