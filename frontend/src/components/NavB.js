import React from "react";
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

export default function NavB() {
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
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link>Orders</Nav.Link>
          </Nav>

          <Form className="d-flex" style={{ marginLeft: "590px" }}>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success mx-2">Search</Button>
          </Form>
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Button variant="light">
                <i
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                  style={{ fontSize: "18px" }}
                >
                  <span className="ml-1">Cart</span>
                </i>
                <Badge bg="secondary" hidden>
                  9
                </Badge>
              </Button>
            </Nav.Link>
          </Nav>
          {/* <Nav className="me-auto">
            <Button
              size="sm"
              className="btn-sm bg-light"
              style={{ height: "40px" }}
            >
              <NavDropdown
                id="collasible-nav-dropdown"
                className="text-light"
                style={{ fontColor: "black" }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
