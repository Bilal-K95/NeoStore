import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UserProfile from "./UserProfile";

export default function Orders() {
  const [state, setstate] = useState([]);
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
            <h3>Orders</h3>
            <hr />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
