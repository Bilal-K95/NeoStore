import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { product } from "../config/MyServices";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [state, setstate] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (token) {
      product()
        .then((res) => {
          setstate(res.data);
        })
        .catch((err) => {
          if (err) throw err;
        });
    } else {
      navigate("/");
    }
  }, []);
  //add to cart
  const dispatch = useDispatch();
  const addItemToCart = (id) => {
    console.log(id);
    dispatch(addToCart(id));
  };

  return (
    <>
      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/sofaCarousel.jpeg"
            alt="First slide"
            height="400px"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="mt-4">
        <Row>
          <Col align="center">
            <h3>Popular Products</h3>
            <Link to="/product">
              <p>View all</p>
            </Link>
          </Col>
        </Row>
        <Row>
          {state.slice(0, 5).map((data) => {
            return (
              <Col sm={3} className="d-flex">
                <Card
                  className="card mt-4 ml-4"
                  style={{ width: "15rem", marginLeft: "20px" }}
                  align="center"
                >
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/productdetails/${data._id}`}
                  >
                    <Card.Img
                      variant="top"
                      src={data.product_image}
                      style={{ height: "10rem" }}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{data.product_name}</Card.Title>
                    <Card.Text className="text-danger ">
                      ₹ {data.product_cost}
                    </Card.Text>

                    <Button
                      variant="danger mx-2"
                      onClick={() => addItemToCart(data._id)}
                    >
                      Add to cart
                    </Button>
                    {/* <Button variant="primary">View</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
