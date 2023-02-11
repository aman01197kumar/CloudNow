import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/first_pic.png";

function IntroductoryPage() {
  return (
    <Container className="mb-10">
      <Row className="d-flex pb-5 pt-5">
        <Col xs={2} sm={3} md={3} lg={5} xl={5} className="fs-4">
          <span className="font-weight-bold ">A+ </span>Studio
        </Col>
        <Col className="d-flex justify-content-between fs-6">
          <div>Home</div>
          <div>What we do</div>
          <div>Service</div>
          <div>Projects</div>
          <div>Blog</div>
          <div>Contact</div>
        </Col>
      </Row>
      <Row className="d-flex align-items-center" id="position">
        <div className="rounded-circle" id="roundBalls"></div>

        <Col>
          <h1>A Digital Product Agency</h1>
          <p className="fs-6 text-secondary">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, Mobile applications, and elaborate
            online business services.
          </p>
          <button className="btn btn-primary rounded-pill mt-5">
            Contact Now
          </button>
        </Col>
        <Col>
          <img alt="" src={myImg} width="100%" height="auto" />
        </Col>
      </Row>
    </Container>
  );
}

export default IntroductoryPage;
