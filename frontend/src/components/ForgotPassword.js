import React from "react";
import { Card, Row, Form, Button, Col } from "react-bootstrap";

export default function ForgotPassword() {
  return (
    <Row className="justify-content-center mt-4">
      <Col xs={4}>
        <Card>
          <Card.Body>
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
