import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assests/gato_sinfondo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about programming and have gained knowledge in
              various areas over the years.
              <br />
              <br />I am skilled in
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Python, and JavaScript.{" "}
                </b>
              </i>
              <br />
              <br />
              My expertise lies in building
              <i>
                <b className="purple"> Web Technologies and Products </b>
              </i>
              and working on
              <b className="purple"> Frontend and Backend solutions. </b>
              <br />
              <br />I have experience with frontend frameworks like
              <i>
                <b className="purple"> React and Angular </b>
              </i>
              and backend development with
              <b className="purple"> Spring Boot. </b>
              <br />
              <br />
              Additionally, I work with containerization technologies like
              <i>
                <b className="purple"> Docker </b>
              </i>
              to streamline development and deployment processes.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/joel12sa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joel-sasig-03378b328/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>    
      </Container>
    </Container>
  );
}

export default Home2;
