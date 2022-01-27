import React, { useState, useEffect } from "react";
import { product } from "../config/MyServices";
import { useParams } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Container,
  Table,
  Button,
  Tab,
  Tabs,
} from "react-bootstrap";
import SocialShareButtons from "./SocialShareButtons";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const [state, setstate] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    product().then((res) => {
      console.log(res.data);
      setstate(res.data);
    });
  }, []);

  //add to cart
  const dispatch = useDispatch();
  const addItemToCart = (id) => {
    console.log(id);
    dispatch(addToCart(id));
  };
  return (
    <Container>
      {state
        .filter((data) => data._id === id)
        .map((data) => {
          return (
            <Table>
              <Row className="mt-4">
                <Col sx={6}>
                  <Card
                    className="card ml-4 mt-4"
                    style={{ width: "18rem" }}
                    align="center"
                  >
                    <Card.Img
                      variant="top"
                      src={`http://localhost:3000/${data.product_image}`}
                      style={{ height: "17rem", width: "23rem" }}
                    />
                  </Card>
                </Col>
                <Col className="mt-4">
                  <div className="mt-2">
                    <h4>{data.product_name}</h4>
                    <p>
                      <i class="fa fa-star-o text-warning" aria-hidden="true" />
                      &nbsp;
                      <i class="fa fa-star-o text-warning" aria-hidden="true" />
                      &nbsp;
                      <i class="fa fa-star-o text-warning" aria-hidden="true" />
                      &nbsp;
                      <i class="fa fa-star-o text-warning" aria-hidden="true" />
                      &nbsp;
                      <i class="fa fa-star-o text-warning" aria-hidden="true" />
                      &nbsp;
                    </p>
                    <p className="mt-4">
                      Price:
                      <span className="text-success">₹{data.product_cost}</span>
                    </p>
                    <p>Color:</p>
                    <p>
                      Share &nbsp;
                      <i class="fa fa-share-alt" aria-hidden="true" />
                    </p>

                    <p>
                      <SocialShareButtons />
                    </p>
                    <p>
                      <Button
                        className="btn-sm"
                        style={{ background: "#00BFFF" }}
                        onClick={() => addItemToCart(data._id)}
                      >
                        ADD TO CART
                      </Button>
                      <Button
                        className="btn-sm ml-4"
                        style={{ background: "#8B4513" }}
                      >
                        RATE PRODUCT
                      </Button>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex ">
                  {state
                    .filter((data) => data._id === id)
                    .map((item) => (
                      <>
                        <p key={item.id}>{item.id}</p>
                        {item.Product_subImages.map((detail) => (
                          <>
                            <Card
                              className="card ml-4"
                              style={{ width: "5rem" }}
                              align="center"
                            >
                              <Card.Img
                                variant="top"
                                src={`http://localhost:3000/${detail.subImage_1}`}
                                // style={{ height: "5rem", width: "5rem" }}
                              />
                            </Card>
                            <Card
                              className="card ml-4"
                              style={{ width: "5rem" }}
                              align="center"
                            >
                              <Card.Img
                                variant="top"
                                src={`http://localhost:3000/${detail.subImage_2}`}
                                style={{ height: "5rem", width: "5rem" }}
                              />
                            </Card>
                          </>
                        ))}
                      </>
                    ))}
                </Col>
              </Row>
              <Row>
                <hr />
                <Col className="mt-4 ml-4">
                  <Tabs
                    defaultActiveKey="Description"
                    id="noanim-tab-example"
                    className="mb-3"
                    transition={false}
                  >
                    <Tab eventKey="Description" title="Description">
                      {data.product_desc}
                    </Tab>
                    <Tab eventKey="Fetures" title="Fetures">
                      <p>feture not added</p>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>

              <p></p>
            </Table>
          );
        })}
    </Container>
  );
}
