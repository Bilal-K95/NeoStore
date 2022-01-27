import React, { useState } from "react";
import {
  Container,
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavB() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <h2>
            Neo<span className="text-danger font-weight-bold">STORE</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/order">
              Orders
            </Nav.Link>
          </Nav>

          <Form className="d-flex" style={{ marginLeft: "590px" }}>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-light mx-2">Search</Button>
          </Form>
          <Nav className="me-auto" className="ml-4">
            {cartItems.length != 0 ? (
              <Badge
                pill
                bg="light"
                text="dark"
                style={{ position: "absolute" }}
                className="ml-1"
              >
                {cartItems.length}
              </Badge>
            ) : (
              ""
            )}

            <Nav.Link as={NavLink} to="/cart">
              <i
                class="fa fa-shopping-cart"
                aria-hidden="true"
                style={{
                  color: "white",
                  fontSize: "45px",
                  margin: "0px -20px",
                  position: "relative",
                }}
              />
            </Nav.Link>
          </Nav>
          <Nav className="me-auto" className="ml-4">
            <NavDropdown
              title={
                <span>
                  <i
                    class="fa fa-user-circle-o"
                    style={{ fontSize: "40px", color: "white" }}
                  ></i>
                  About
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Nav.Link className="text-dark" as={NavLink} to="/about">
                  Profile
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link className="text-dark" as={NavLink} to="/">
                  Logout
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
