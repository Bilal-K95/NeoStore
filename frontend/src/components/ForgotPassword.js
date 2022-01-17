import React from "react";
import { Card, Row, Form, Button, Col } from "react-bootstrap";

export default function ForgotPassword() {
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
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicLname">
              <Form.Label>New password</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
