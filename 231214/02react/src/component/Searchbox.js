import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Searchbox = () => {
  return (
    <Row className="searchBox">
      <Col>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col>
        <Button>검색</Button>
      </Col>
    </Row>
  );
};

export default Searchbox;
