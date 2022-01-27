import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";
import { getaddress } from "../config/MyServices";
import { deleteAddress } from "../config/MyServices";

export default function DeliverAddress() {
  const [state, setstate] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const [data, setdata] = useState([]);

  //get address
  useEffect(() => {
    let temp = sessionStorage.getItem("user");

    getaddress({ email: temp })
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  //delte address
  const onDelete = async (id) => {
    await deleteAddress(id);
  };

  return (
    <Container>
      {/* <UserProfile /> */}
      <Row>
        <Col xs={4}></Col>

        <Col xs={6} className="ml-4">
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 10px 18px #888888 ",
              padding: "10px",
            }}
          >
            <h3>Select Deliver Address</h3>

            <hr />
            {data.map((item) => (
              <>
                <p key={item.id}>{item.id}</p>
                {item.address.map((detail) => (
                  <>
                    <p className="ml-3">
                      <span style={{ float: "left" }}>
                        <Form.Check
                          type="radio"
                          name="address"
                          aria-label="radio 1"
                        />
                      </span>
                      {detail.address}

                      <span>
                        <i
                          class="fa fa-remove"
                          style={{
                            float: "right",

                            color: "red",
                          }}
                          onClick={() => onDelete(detail._id)}
                        />
                      </span>
                    </p>

                    <p className="ml-3">
                      {detail.city}-{detail.pincode}
                    </p>
                    <p className="ml-3">{detail.country}</p>
                    <Button className="btn-sm ml-3 ">Edit</Button>
                    <hr />
                  </>
                ))}
              </>
            ))}
            <Link to="/addaddress">
              <Button className="btn-sm ml-3">Add Address</Button>
            </Link>
            <Link to="/carddetail">
              <Button className="btn-sm btn-success" style={{ float: "right" }}>
                place order
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
