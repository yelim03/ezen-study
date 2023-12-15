import React from "react";
import { Row, Col } from "react-bootstrap";

const Contactitem = () => {
  return (
    <Row>
      <Col className="contactItems">
        <img
          width={80}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
          alt="unKnown"
        />
      </Col>
    </Row>
  );
};

export default Contactitem;
