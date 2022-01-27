import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { getOrder } from "../config/MyServices";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let temp = sessionStorage.getItem("user");

    const token = sessionStorage.getItem("token");
    console.log(token);
    if (token) {
      getOrder({ email: temp })
        .then((res) => {
          console.log(res.data);
          setState(res.data);
        })
        .catch((err) => {
          if (err) throw err;
        });
    } else {
      navigate("/");
    }
  }, []);
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
            <h3>Orders</h3>

            <>
              <Table>
                {state.map((em) => (
                  <>
                    <tr>
                      <th>buyer id</th>
                      <td>{em.email}</td>
                    </tr>

                    {em.order_List.map((pr) => {
                      return (
                        <>
                          <tr>
                            <th>product name</th>
                            <td>{pr.product_name}</td>
                          </tr>
                          <tr>
                            <th> product image</th>
                            <td>
                              {
                                <img
                                  src={`${pr.product_image}`}
                                  height="70px"
                                  width="200px"
                                />
                              }
                            </td>
                          </tr>
                          <tr>
                            <th> product quantity</th>
                            <td>{pr.product_quantity}</td>
                          </tr>
                          <tr>
                            <th> product price</th>
                            <td>{pr.product_cost}</td>
                          </tr>
                          <hr />
                        </>
                      );
                    })}
                  </>
                ))}
              </Table>
            </>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
