import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { order } from "../config/MyServices";
import { useNavigate } from "react-router-dom";

export default function CardDetails() {
  const [state, setState] = useState(JSON.parse(localStorage.getItem("cart")));
  console.log(state);
  let [element1, setElement] = useState([]);
  let navigate = useNavigate();

  state.forEach((element) => {
    element1.push({
      product_image: element.product_image,
      product_name: element.product_name,
      product_quantity: element.product_quantity,
      product_cost: element.product_cost,
      product_category: element.product_category,
      product_color: element.product_color,
    });
  });
  const handleOnClick = (e) => {
    e.preventDefault();
    let data = element1;
    let email = sessionStorage.getItem("user");
    order({ email: email, order_List: data }).then((res) => {
      console.log(res.data);
      navigate("/order");
    });
  };

  // for (let i = 0; i <= state.length; i++) {
  //   console.log(state[i]);
  // }

  return (
    <Container style={{ display: "flex", margin: "100px 450px" }}>
      <div
        className="mt-3"
        style={{
          border: "1px",

          boxShadow: "5px 10px 18px #888888 ",
          padding: "10px",
          width: "500px",
        }}
      >
        <h3 className="text-center">Confirm Purchase</h3>
        <Form className="container mt-4">
          <div className="d-flex ">
            <Form.Group
              className="mb-1 mr-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Owner</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group
              className="mb-1 ml-4"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>CVV</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </div>

          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <div className="d-flex">
            <Form.Group
              className="mb-1 mr-4"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Valid Up to</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <i
              class="fa fa-cc-visa mr-2 ml-4 mt-4"
              aria-hidden="true"
              style={{ fontSize: "48px", color: "blue" }}
            />
            <i
              class="fa fa-cc-mastercard  mr-2  mt-4"
              aria-hidden="true"
              style={{ fontSize: "48px", color: "black" }}
            />
            <i
              class="fa fa-cc-amex  mr-2  mt-4"
              aria-hidden="true"
              style={{ fontSize: "48px", color: "skyblue" }}
            />
          </div>
          <Button
            size="sm"
            className="mt-4 text-dark"
            onClick={handleOnClick}
            style={{
              width: "450px",
              backgroundColor: "#00CED1",
              textDecoration: "none",
              border: "none",
              fontSize: "16px",
            }}
          >
            Confirm
          </Button>
        </Form>
      </div>
    </Container>
  );
}
