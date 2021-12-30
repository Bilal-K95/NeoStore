import React from "react";
import { Col, Row, Form, Button, FormControl } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "90px" }}
    >
      <Row className="justify-content-cente" align="center">
        <Col className="mt-4">
          <h4>About Company</h4>
          <p className="mt-4">
            NeoSOFT Technologies is here at quick and easy service
            <br /> for shooping
            <br />
            contact Information
            <br /> Email contact@neosofttech.com <br /> phone: +91 0000000000
            <br />
            MUMBAI,INDIA
          </p>
        </Col>
        <Col className="mt-4">
          <h4>Information</h4>
          <p>
            Terms and Conditions <br />
            Guarantee and Return Policy <br />
            Contact Us <br />
            Private Policy <br />
            Locate Us
          </p>
        </Col>
        <Col className="mt-4">
          <h4>Newsletter</h4>
          <p>
            SignUp to get exclusive offer from our favorite brands and to <br />
            be well up in the news <br />
            <Form className="center mt-4">
              <FormControl
                type="search"
                placeholder="your mail"
                className="me-2"
                aria-label="Search"
                style={{ width: "200px" }}
                size="sm"
              />
              <Button variant="light" className="mt-2" size="sm">
                Subscribe
              </Button>
            </Form>
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col sx={12}>
          Copyright 2017 NeoSOFT Technologies allright reserved | Design by
          Bilal Sh
        </Col>
      </Row>
    </div>
  );
}
