import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(0);
  const [GST, setGST] = useState(0);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    console.log(cartItems);
  });

  //price calculations
  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0;
    let GST = 0;
    let quantity = 0;
    cartItems.map((item) => {
      price += item.product_cost;
      quantity += item.product_cost * item.product_quantity;
      GST += quantity * 0.05;
    });
    setPrice(price);
    setGST(GST);
    setQuantity(quantity);
  };

  //Inc Decr Cart quantity

  const handleIncreament = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDecreament = () => {
    setCounter((counter) => counter - 1);
  };

  //delete cart
  const dispatch = useDispatch();
  const reomoveItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={8}>
            <div
              className="mt-3"
              style={{
                border: "1px",

                boxShadow: "5px 10px 18px #888888 ",
                padding: "10px",
              }}
            >
              <Table align="center">
                {cartItems.length != 0 && (
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Product Name</th>
                      <th>Product Quantity</th>
                      <th>Product Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                )}
                {cartItems.length === 0 ? (
                  <h2>cart is empty</h2>
                ) : (
                  cartItems.map((item) => {
                    return (
                      <>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={`${item.product_image}`}
                                height="100px"
                                width="200px"
                              />
                            </td>
                            <td>{item.product_name}</td>
                            <td>
                              <ButtonGroup aria-label="Basic example">
                                {/* <Button
                                  variant="light"
                                  onClick={() => handleDecreament()}
                                  disabled={counter === 1}
                                >
                                  -
                                </Button> */}
                                <Button variant="light">
                                  {item.product_quantity}
                                </Button>
                                {/* <Button
                                  variant="light"
                                  onClick={() => handleIncreament()}
                                >
                                  +
                                </Button> */}
                              </ButtonGroup>
                            </td>
                            <td>{item.product_cost}</td>
                            <td>
                              <Button
                                className="btn-light"
                                onClick={() => reomoveItemFromCart(item._id)}
                              >
                                <i class="fa fa-remove text-danger"></i>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })
                )}
              </Table>
            </div>
          </Col>
          <Col xs={4}>
            {cartItems.length === 0 ? (
              ""
            ) : (
              <div
                className="mt-3"
                style={{
                  border: "1px",
                  boxShadow: "5px 10px 18px #888888 ",
                  padding: "10px",
                }}
              >
                <Table>
                  <div>
                    <Row>
                      <Col>
                        <thead>
                          <tr>
                            <th>Review Order</th>
                          </tr>
                          <tr>
                            <th>Subtotal</th>
                          </tr>

                          <tr>
                            <th>GST(5%)</th>
                          </tr>

                          <tr>
                            <th>Order Total</th>
                          </tr>
                        </thead>
                      </Col>
                      <Col>
                        <tbody>
                          <tr>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>{quantity}</td>
                          </tr>

                          <tr>
                            <td>{GST}</td>
                          </tr>

                          <tr>
                            <td>{quantity + GST}</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <Link to="/deliveraddress">
                                <Button>Proceed to buy</Button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </Col>
                    </Row>
                  </div>
                </Table>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
