import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";
import { getaddress } from "../config/MyServices";
import { deleteAddress } from "../config/MyServices";

export default function Address() {
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
      <UserProfile />
      <Row>
        <Col xs={4}></Col>

        <Col xs={6} style={{ marginTop: "-438px" }} className="ml-4">
          <div
            className="mt-3"
            style={{
              border: "1px",

              boxShadow: "5px 10px 18px #888888 ",
              padding: "10px",
            }}
          >
            <h3>Address</h3>

            <hr />
            {data.map((item) => (
              <>
                <p key={item.id}>{item.id}</p>
                {item.address.map((detail) => (
                  <>
                    <p>
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

                    <p>
                      {detail.city}-{detail.pincode}
                    </p>
                    <p>{detail.country}</p>
                    <Button className="btn-sm  ">Edit</Button>
                    <hr />
                  </>
                ))}
              </>
            ))}
            <Link to="/addaddress">
              <Button className="btn-sm btn-success ">Add Address</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
