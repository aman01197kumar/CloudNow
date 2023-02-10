import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import google from "../assets/google.png";
import uberEats from "../assets/uber_eats.png";
import airbnb from "../assets/airbnb.png";
import amazon from "../assets/amazon.png";

function ClientList() {
  return (
    <Container>
      <Row>
        <Col className="w-30">
          <h1>Our Client</h1>
          <div className="text-secondary">
            Several selected clients, who already believed in our services
          </div>
        </Col>
        <Col className="d-flex justify-content-between w-70">
          <img src={google} width="150px" height="49px" />
          <img src={airbnb} width="166px" height="52px" />
          <img src={uberEats} width="166px" height="28px" />
          <img src={amazon} width="142px" height="43px" />
        </Col>
      </Row>
    </Container>
  );
}

export default ClientList;
