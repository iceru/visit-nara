import React from "react";
import { Row, Col, Form } from "react-bootstrap";

import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";

import "./style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="container">
          <Row>
            <Col xs={5}>
              <div className="search">
                <Form.Control placeholder="Search the Nara directory here"></Form.Control>
                <div className="icon">
                  <img src={Search} />
                </div>
              </div>
            </Col>
            <Col xs={2}>
              <div className="logo">
                <img src={Logo} />
              </div>
            </Col>
            <Col xs={5}>
              <div className="menu">
                <ul>
                  <li>Discover</li>
                  <li>Things to Do</li>
                  <li>Plan Your Trip</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Navigation;
