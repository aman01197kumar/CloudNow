import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import google from "../assets/google.png";
import uberEats from "../assets/uber_eats.png";
import airbnb from "../assets/airbnb.png";
import amazon from "../assets/amazon.png";

function ClientList() {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={3} md={4}>
          <h1>Our Client</h1>
          <div className="text-secondary">
            Several selected clients, who already believed in our services
          </div>
        </Col>
        <Col
          xs={9}
          md={8}
          className="d-flex flex-wrap justify-content-between align-items-center w-70"
        >
          <img src={google} width="130px" height="45px" />
          <img src={airbnb} width="146px" height="48px" />
          <img src={uberEats} width="146px" height="24px" />
          <img src={amazon} width="122px" height="40px" />
        </Col>
      </Row>
    </Container>
  );
}

export default ClientList;
