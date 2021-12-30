import React from "react";
import { Carousel, Col, Container, Row, Card, Button } from "react-bootstrap";

export default function Home() {
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
            <p>View all</p>
          </Col>
        </Row>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
