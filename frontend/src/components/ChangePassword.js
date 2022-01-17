import React from "react";
import { Col, Row, Card, Form, Button, Container } from "react-bootstrap";
import UserProfile from "./UserProfile";

export default function ChangePassword() {
  return (
    <Container>
      <UserProfile />
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
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Enter new password</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="email" />
                <Button className="mt-3">Submit</Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
