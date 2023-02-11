import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import presentation from "../assets/presentation.png";
import person from "../assets/person.png";

function Middleware() {
  return (
    <Container className="p-5">
      <Row className="d-flex align-items-center">
        <Col>
          <img src={presentation} alt="" width="100%" />
        </Col>
        <Col>
          <h1>Great Digital Product Agency since 2016</h1>
          <div className="text-secondary">
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </div>
        </Col>
      </Row>
      <Row className="text-center p-5">
        <h1>What our happy clients say</h1>
        <div className="text-secondary">
          Several selected clients, who already believe in our services
        </div>
      </Row>
      <Row className="d-flex align-items-center">
        <Col>
          <img src={person} alt="" width="70%" />
        </Col>
        <Col>
          <h4>Methew Paul</h4>
          <div className="text-secondary">
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Middleware;
