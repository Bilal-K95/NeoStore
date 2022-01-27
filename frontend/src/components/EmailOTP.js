import React, { useRef } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { OTPSend } from "../config/MyServices";
import { useNavigate } from "react-router-dom";
export default function EmailOTP() {
  const emailRef = useRef();
  const navigate = useNavigate();
  const sendOTP = (e) => {
    e.preventDefault();
    OTPSend({ email: emailRef.current.value }).then((res) => {
      if (res.data.err > 0) {
        alert(res.data.msg);
      } else if (res.data.err == 0) {
        alert(res.data.msg);
        navigate("/forgotpassword", { state: emailRef.current.value });
      }
    });
  };
  return (
    <Container style={{ margin: "100px 400px" }}>
      <div
        className="mt-3 justify-content-center align-items-center"
        style={{
          border: "1px",

          boxShadow: "5px 10px 18px #888888 ",
          padding: "10px",
          width: "50%",
        }}
      >
        <h4>Reset Password</h4>
        <Form.Label htmlFor="inputEmail">Email</Form.Label>
        <Form.Control type="email" id="inputEmail" ref={emailRef} />

        <Button className="btn-sm btn-success mt-4" onClick={sendOTP}>
          Send OTP
        </Button>
        <Button className="btn-sm btn-danger mt-4 ml-2">Back</Button>
      </div>
    </Container>
  );
}
