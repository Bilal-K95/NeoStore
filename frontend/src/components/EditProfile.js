import React, { useState, useEffect } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { address } from "../config/MyServices";
import { useNavigate } from "react-router-dom";
import { getUserById, editUser } from "../config/MyServices";
import { useParams } from "react-router-dom";

const initialValue = {
  fname: "",
  lname: "",
  mobile: "",
  email: "",
};

export default function EditProfile() {
  const [user, setUser] = useState(initialValue);
  const { fname, lname, mobile, email } = user;
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const res = await getUserById(id);
    setUser(res.data);
    console.log(res.data);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    const res = await editUser(id, user);
    navigate("/profile");
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
            <h3>Edit Profile</h3>

            <hr />

            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  onChange={(e) => handleOnChange(e)}
                  value={fname}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  onChange={(e) => handleOnChange(e)}
                  value={lname}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="email"
                  name="mobile"
                  onChange={(e) => handleOnChange(e)}
                  value={mobile}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={(e) => handleOnChange(e)}
                  value={email}
                  disabled
                />
              </Form.Group>

              <Button onClick={handleOnClick}>Edit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
