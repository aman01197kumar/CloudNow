import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <Row className="d-flex border-bottom">
        <Col>
          <h4 className="w-50">A+ Studio</h4>
          <div className="text-secondary">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, Mobile applications, and elaborate
            online business services
          </div>
          <div className="d-flex justify-content-evenly">
            <i class="fa fa-facebook-f "></i>
            <i class="fa fa-twitter-square"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </Col>
        <Col>
          <h4>What we do</h4>
          <div>Web Design</div>
          <div>App Design</div>
          <div>Social Media Manage</div>
          <div>Market Analysis</div>
        </Col>
        <Col>
          <h4>Company</h4>
          <div>About us</div>
          <div>Career</div>
          <div>Become Investor</div>
        </Col>
        <Col>
          <h4>Support</h4>
          <div>FAQ</div>
          <div>Policy</div>
          <div>Business</div>
        </Col>
        <Col>
          <h4>Contact</h4>
          <div>WhatApp</div>
          <div>Support 24</div>
        </Col>
      </Row>

      <Col className="text-secondary text-center">
        Copyright &copy; 2022 Avi Yansah
      </Col>
    </Container>
  );
}

export default Footer;
