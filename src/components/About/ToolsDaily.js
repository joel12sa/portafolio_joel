import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman } from "react-icons/si";
import { AiOutlineLinux } from "react-icons/ai";
import { SiPycharm } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GrGithub } from "react-icons/gr";

function ToolsDaily() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGithub />
      </Col>
    </Row>
  );
}

export default ToolsDaily;
