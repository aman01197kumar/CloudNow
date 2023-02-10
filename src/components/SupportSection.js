import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SupportSection() {
  return (
    <Container className="border-bottom">
      <Row>
        <Col>
          <h1>How can we help your business</h1>
          <div className="text-secondary ">
            We build readymade websites, Mobile applications, and elaborate
            online business services
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default SupportSection;
