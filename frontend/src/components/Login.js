import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Card,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialButton from "./SocialButton";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSocialLogin = (user) => {
    console.log(user);
    if (user) navigate("/home");
  };
  const handleSocialLoginFailure = (err) => {
    if (err) console.log(err);
  };
  return (
    <Container className="mt-4 ">
      <Table>
        <Row>
          <Col
            sm={6}
            align="left"
            style={{ marginTop: "50px" }}
            style={{ borderRight: "5px solid" }}
          >
            <Row>
              <SocialButton
                variant="primary"
                size="lg"
                className="btn btn-sm mt-4"
                id="btnsocial"
                provider="facebook"
                appId="240134211515385"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
              >
                <i
                  class="fa fa-facebook"
                  style={{ fontSize: "40px", paddingLeft: "25px" }}
                />
                <span className="ml-4">Login with facebook</span>
              </SocialButton>
            </Row>
            <Row>
              <SocialButton
                variant="danger"
                size="lg"
                className="btn btn-sm mt-4"
                id="btnsocial"
                provider="google"
                appId="665946475261-cnjf3jbpq9rau27n7jrbjqkmv7464pn9.apps.googleusercontent.com"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
              >
                <i
                  class="fa fa-google"
                  style={{ fontSize: "40px", marginLeft: "5px" }}
                />
                <span className="ml-4"> Login with gmail</span>
              </SocialButton>
            </Row>
            <Row>
              <Button
                variant="info"
                size="lg"
                className="btn btn-sm mt-4"
                id="btnsocial"
              >
                <i
                  class="fa fa-twitter"
                  style={{ fontSize: "40px", marginLeft: "10px" }}
                />
                <span className="ml-4"> Login with twitter</span>
              </Button>
            </Row>
          </Col>

          <Row className="ml-4">
            <Col sm={6}>
              <Card style={{ width: "30rem" }}>
                <Card.Body className="ml-4">
                  <Row>
                    <h2>Login to NeoStore</h2>
                  </Row>
                  <Row>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" ></Form.Control>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>password</Form.Label>
                        <Form.Control as="password" />
                      </Form.Group>
                    </Form>
                  </Row>
                  <Row>
                    <Button variant="primary">Login</Button>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Table>
      <Row>
        <Col>
          <h6 align="center" className="mt-2">
            <Link to="/register"> Register Now </Link>| Forgotten?
          </h6>
        </Col>
      </Row>
    </Container>
  );
}
