import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";
import { getaddress } from "../config/MyServices";
import { deleteAddress } from "../config/MyServices";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const [state, setstate] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  //get address
  useEffect(() => {
    let temp = sessionStorage.getItem("user");

    const token = sessionStorage.getItem("token");
    console.log(token);
    if (token) {
      getaddress({ email: temp })
        .then((res) => {
          console.log(res.data);
          setdata(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          if (err) throw err;
        });
    } else {
      navigate("/");
    }
  }, []);

  //delte address
  const onDelete = async (id, item) => {
    console.log(id, item);
    let d = { id: id, item: item };
    await deleteAddress(d).then((res) => {
      if (res.err.data > 0) {
        alert(res.data.err);
      } else {
        if (res.data == 0) {
          alert(res.data.err);
        }
      }
    });
  };

  // edit address
  const onEdit = () => {
    window.location.reload(false);
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
                        <Button
                          className="btn-sm btn-light"
                          style={{
                            float: "right",
                          }}
                        >
                          <i
                            class="fa fa-remove"
                            style={{
                              float: "right",

                              color: "red",
                            }}
                            onClick={() => onDelete(detail._id, item._id)}
                          />
                        </Button>
                      </span>
                    </p>

                    <p>
                      {detail.city}-{detail.pincode}
                    </p>
                    <p>{detail.country}</p>

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
