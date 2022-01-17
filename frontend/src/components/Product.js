import React, { useState, useEffect } from "react";
import {
  Table,
  Row,
  Col,
  Card,
  Button,
  Pagination,
  Dropdown,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { product } from "../config/MyServices";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "./PaginationComponent";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

export default function Product() {
  //Pagination
  const [showPerPage, setShowPerPage] = useState(9);
  const [pagination, setPagination] = useState({ start: 0, end: showPerPage });
  const [total, setTotal] = useState();

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  const [state, setstate] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    product().then((res) => {
      if (res.data.err == 1) {
        navigate("/");
        alert("login first");
      } else {
        setstate(res.data);

        setTotal(res.data.length);
      }
    });
  }, []);
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
            All Products
          </div>
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 0px 18px #888888 ",
              padding: "10px",
            }}
          >
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Sofa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Chair</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Table</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 0px 18px #888888 ",
              padding: "10px",
            }}
          >
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Color
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">black </Dropdown.Item>
                <Dropdown.Item href="#/action-2">white</Dropdown.Item>
                <Dropdown.Item href="#/action-3">green</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>

        <Col style={{ marginLeft: "0px" }}>
          <Row>
            {state.slice(pagination.start, pagination.end).map((data) => {
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
                        <Card.Text>₹{data.product_cost}</Card.Text>

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

          <PaginationComponent
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={total}
          />
        </Col>
      </Row>
    </Container>
  );
}
