import React, { useState, useEffect } from "react";
import { Button, Container, Pagination } from "react-bootstrap";

export default function PaginationComponent({
  showPerPage,
  onPaginationChange,
  total,
}) {
  console.log(total, "props");
  const [counter, setCounter] = useState(1);
  const [items, setItems] = useState([]);
  const [numberOfButtons, setNumberOfButtons] = useState();
  useEffect(() => {
    setNumberOfButtons(Math.ceil(total / showPerPage));
  }, []);
  useEffect(() => {
    for (let number = 1; number <= numberOfButtons; number++) {
      items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }
    setItems([...items]);
  }, [onPaginationChange]);
  useEffect(() => {
    const val = showPerPage * counter;
    onPaginationChange(val - showPerPage, val);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Pagination size="sm">
        <Pagination.Prev
          size="sm"
          onClick={() => onButtonClick("prev")}
          className="ml-4"
        />
        {items}
        <Pagination.Next size="sm" onClick={() => onButtonClick("next")} />
      </Pagination>
      {console.log(numberOfButtons, "hiiii numberOfbuttons", items)}
      {/* <Button className="btn-sm btn-primary" style={{ marginLeft: "80px" }}>
        Prev
      </Button>
      <Button className="btn-sm btn-primary" style={{ marginRight: "15px" }}>
        Next
      </Button> */}
    </Container>
  );
}
