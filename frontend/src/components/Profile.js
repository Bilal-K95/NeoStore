import React, { useState, useEffect } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { profile } from "../config/MyServices";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let temp = sessionStorage.getItem("user");
    let token = sessionStorage.getItem("token");
    profile({ email: temp })
      .then((res) => {
        if (res.data.err == 1) {
          alert("please login first");
          navigate("/");
        } else {
          console.log(res.data);
          setState(res.data);
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);
  return (
    <Container>
      <UserProfile />
      {console.log("working")}
      <Row className="ml-4">
        <Col xs={4}></Col>

        <Col xs={6} style={{ marginTop: "-438px" }}>
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 10px 18px #888888 ",
              padding: "10px",
            }}
          >
            <h3>Profile</h3>
            <hr />

            <Row className="mt-4">
              <Col>
                <p>First Name </p>
              </Col>
              <Col>
                <p>{state?.fname}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>LastName</p>
              </Col>
              <Col>
                <p>{state?.lname}</p>
              </Col>
            </Row>
            {/* <Row>
                <Col>
                  <p>Gender</p>
                </Col>
                <Col>
                  <p>Male</p>
                </Col>
              </Row> 
              <Row>
                <Col>
                  <p>Date of birth</p>
                </Col>
                <Col>
                  <p>1/6/95</p>
                </Col>
              </Row>*/}
            <Row>
              <Col>
                <p>Mobile No</p>
              </Col>
              <Col>
                <p>{state?.mobile}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Email</p>
              </Col>
              <Col>
                <p>{state?.email}</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Button>Edit</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
