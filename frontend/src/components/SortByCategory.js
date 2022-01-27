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
  Form,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { product } from "../config/MyServices";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "./PaginationComponent";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

export default function SortByCategory() {
  //Pagination
  const [showPerPage, setShowPerPage] = useState(9);
  const [pagination, setPagination] = useState({ start: 0, end: showPerPage });
  const [total, setTotal] = useState();
  const location = useLocation();
  const category = location.pathname;
  console.log(location);
  console.log(category);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  const [state, setstate] = useState([]);
  const [filter, setFilter] = useState({});

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

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({ ...filter, [e.target.name]: value });
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
            <select name="category" onChange={handleFilter}>
              <option disabled> Categories</option>
              <option>Sofa</option>
              <option>Chair</option>
              <option>Table</option>
            </select>
            {/* <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Categories
              </Dropdown.Toggle> */}

            {/* <Dropdown.Menu> */}
            {/* <Link to={`/sortbycategory/${data.product_category}`}></Link> */}
            {/* <Dropdown.Item>Sofa</Dropdown.Item>
                <Dropdown.Item>Chair</Dropdown.Item>
                <Dropdown.Item>Table</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 0px 18px #888888 ",
              padding: "10px",
            }}
          >
            <select name="color" onChange={handleFilter}>
              <option disabled> Categories</option>
              <option>red</option>
              <option>black</option>
              <option>white</option>
            </select>
            {/* <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Color
              </Dropdown.Toggle>

              <Dropdown.Menu name="category" onChange={handleFilter}>
                <Dropdown.Item href="#/action-1">black </Dropdown.Item>
                <Dropdown.Item href="#/action-2">white</Dropdown.Item>
                <Dropdown.Item href="#/action-3">green</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
        </Col>

        <Col style={{ marginLeft: "0px" }}>
          <Row>
            {state
              .filter((data) => data.category_name == state.filter)
              .map((data) => {
                return (
                  <>
                    {/* <Link to={`/sortbycategory/${data.product_category}`}> */}
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
                    {/* </Link> */}
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
