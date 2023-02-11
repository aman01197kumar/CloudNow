import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import fb from "../assets/fb.png";

function Footer() {
  return (
    <Container>
      <Row className="d-flex border-bottom gx-5 p-2">
        <Col md={4}>
          <h4 className="w-50">A+ Studio</h4>
          <div className="text-secondary">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, Mobile applications, and elaborate
            online business services
          </div>
          <Row className="d-flex gx-2 my-3">
            <Col md={2}>
              <img src={fb} alt="" />
            </Col>
            <Col md={2}>
              <img src={twitter} alt="" />
            </Col>
            <Col md={2}>
              <img src={Linkedin} alt="" />
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <h4>What we do</h4>
          <div>Web Design</div>
          <div>App Design</div>
          <div>Social Media Manage</div>
          <div>Market Analysis</div>
        </Col>
        <Col md={2}>
          <h4>Company</h4>
          <div>About us</div>
          <div>Career</div>
          <div>Become Investor</div>
        </Col>
        <Col md={2}>
          <h4>Support</h4>
          <div>FAQ</div>
          <div>Policy</div>
          <div>Business</div>
        </Col>
        <Col md={2} className="text-align-right">
          <h4>Contact</h4>
          <div>WhatApp</div>
          <div>Support 24</div>
        </Col>
      </Row>

      <Col className="text-secondary text-center p-2">
        Copyright &copy; 2022 Avi Yansah
      </Col>
    </Container>
  );
}

export default Footer;
