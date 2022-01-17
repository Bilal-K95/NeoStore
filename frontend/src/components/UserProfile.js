import React from "react";
import { Row, Col, Card, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function UserProfile() {
  let location = useLocation();
  // console.log(location);
  return (
    <>
      <Row className="mt-4 ml-4">
        <Col xs={4} align="center">
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 10px 18px #888888 ",
              padding: "10px",
            }}
          >
            <img
              src="/Images/profile.jfif"
              alt="profile image"
              style={{ borderRadius: "50%", height: "200px" }}
            />
            <p>shahrukh khan</p>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link as={NavLink} to="/order">
                <i class="fa fa-align-right" aria-hidden="true">
                  &nbsp; Orders
                </i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile">
                <i class="fa fa-user-circle" aria-hidden="true">
                  &nbsp; Profile
                </i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/address">
                <i class="fa fa-address-card" aria-hidden="true">
                  &nbsp; Adress
                </i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/changepassword">
                <i class="fa fa-exchange" aria-hidden="true">
                  &nbsp;Change password
                </i>
              </Nav.Link>
            </Nav>
          </div>
        </Col>
      </Row>
    </>
  );
}
