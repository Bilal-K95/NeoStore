import React from "react";
import { Table, Row, Col, Card, Button, Pagination } from "react-bootstrap";

export default function Product() {
  return (
    <div>
      <Table border="1" className="mt-4">
        <Row>
          <Col sm={2}>
            <Card style={{ width: "18rem" }} className="mt-4">
              <Card.Header>All Products</Card.Header>
            </Card>
          </Col>

          <Col sx={8}>
            <Row align="center">
              <Card style={{ width: "18rem" }} className="mt-4">
                <Card.Img
                  variant="top"
                  src="Images/product-1.jpg"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Appolo Section Sofa Green</Card.Title>
                  <Card.Text>₹50000</Card.Text>
                  <Button variant="danger">Add To Cart</Button>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "18rem", marginLeft: "20px" }}
                className="mt-4"
              >
                <Card.Img
                  variant="top"
                  src="Images/product-2.jpg"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Appolo Section Sofa Green</Card.Title>
                  <Card.Text>₹50000</Card.Text>
                  <Button variant="danger">Add To Cart</Button>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "18rem", marginLeft: "20px" }}
                className="mt-4"
              >
                <Card.Img
                  variant="top"
                  src="Images/product-3.jfif"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Appolo Section Sofa Green</Card.Title>
                  <Card.Text>₹50000</Card.Text>
                  <Button variant="danger">Add To Cart</Button>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "18rem", marginLeft: "20px" }}
                className="mt-4"
              >
                <Card.Img
                  variant="top"
                  src="Images/product-4.jfif"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Appolo Section Sofa Green</Card.Title>
                  <Card.Text>₹50000</Card.Text>
                  <Button variant="danger">Add To Cart</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }} className="mt-4">
                <Card.Img
                  variant="top"
                  src="Images/product-5.jpg"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Appolo Section Sofa Green</Card.Title>
                  <Card.Text>₹50000</Card.Text>
                  <Button variant="danger">Add To Cart</Button>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "18rem", marginLeft: "20px" }}
                className="mt-4"
              >
                <Card.Img
                  variant="top"
                  src="Images/product-6.jfif"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Appolo Section Sofa Green</Card.Title>
                  <Card.Text>₹50000</Card.Text>
                  <Button variant="danger">Add To Cart</Button>
                </Card.Body>
              </Card>

              <Pagination className="mt-4">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Row>
          </Col>
        </Row>
      </Table>
    </div>
  );
}
