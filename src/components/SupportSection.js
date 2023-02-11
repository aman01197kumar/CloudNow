import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsSection from "./CardsSection";

function SupportSection() {
  return (
    <Container className="border-bottom my-5 pb-5" id="position">
      <div id="smallBackground"></div>
      <div id="bigBackground"></div>
      <Row className="align-items-center">
        <Col xs={12} sm={12} md={4}>
          <h1>How can we help your business</h1>
          <div className="text-secondary ">
            We build readymade websites, Mobile applications, and elaborate
            online business services
          </div>
        </Col>
        <Col xs={0} sm={0} md={8} className="d-flex">
          <CardsSection />
        </Col>
      </Row>
    </Container>
  );
}

export default SupportSection;
