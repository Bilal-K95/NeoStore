import React, { useState, useEffect } from "react";
import { Table, Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { product } from "../config/MyServices";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "./PaginationComponent";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

export default function Product() {
  const location = useLocation();
  const category = location.pathname;
  console.log(location);
  console.log(category);

  const [state, setstate] = useState([]);
  const [filter, setFilter] = useState("Category");
  const [color, colorFilter] = useState("Color");

  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (token) {
      product().then((res) => {
        if (res.data.err > 0) {
          alert("login first");
          navigate("/");
        } else {
          setstate(res.data);
        }
      });
    } else {
      navigate("/");
    }
  }, []);

  // category filter
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(e.target.value);
  };

  //color filter
  const handleColorFilter = (e) => {
    const value = e.target.value;
    colorFilter(e.target.value);
  };

  console.log(filter);
  //add to cart
  const dispatch = useDispatch();
  const addItemToCart = (id) => {
    console.log(id);
    dispatch(addToCart(id));
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="ml-4">
          <div
            className="mt-4"
            style={{
              border: "1px",

              boxShadow: "5px 0px 18px #888888 ",
              padding: "10px",
            }}
          >
            <a
              href="/product"
              style={{ textDecoration: "none", color: "black" }}
            >
              All Products
            </a>
          </div>
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 0px 18px #888888 ",
              padding: "10px",
            }}
          >
            <select
              name="category"
              onChange={handleFilter}
              style={{ border: "none", outline: "0px" }}
            >
              <option> Category</option>
              <option>laptop_table</option>
              <option>sofa</option>
              <option>bed</option>
              <option>chair</option>
              <option>wardrobe</option>
              <option>almirah</option>
            </select>
          </div>
          <div
            className="mt-3"
            style={{
              border: "1px",
              boxShadow: "5px 0px 18px #888888 ",
              padding: "10px",
            }}
          >
            <select
              name="color"
              onChange={handleColorFilter}
              style={{ border: "none", outline: "0px" }}
            >
              <option> Color</option>
              <option>brown</option>
              <option>black</option>
              <option>white</option>
              <option>orange</option>
              <option>blue</option>
              <option>pink</option>
            </select>
          </div>
        </Col>

        <Col style={{ marginLeft: "0px" }}>
          <Row>
            {console.log(filter)}
            {state
              .filter((data) =>
                filter != "Category" ? data?.product_category === filter : data
              )
              .filter((data) =>
                color != "Color" ? data?.product_color === color : data
              )
              .map((data) => {
                return (
                  <>
                    <Col
                      xs={3}
                      className=" text-center"
                      style={{ marginLeft: "60px" }}
                    >
                      <Card style={{ width: "15rem" }} className="card mt-4">
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
                          <Card.Text>???{data.product_cost}</Card.Text>

                          <Button
                            variant="danger"
                            onClick={() => addItemToCart(data._id)}
                          >
                            Add To Cart
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
