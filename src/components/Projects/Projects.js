import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import leaf from "../../Assests/blog.png";
import editor from "../../Assests/blog.png";
import chatify from "../../Assests/blog.png";

import bitsOfCode from "../../Assests/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CRUD APIREST"
              description="Este proyecto consiste en una aplicación web que utiliza un conjunto de tecnologías modernas para ofrecer un sistema CRUD (Crear, Leer, Actualizar, Eliminar) de productos con una interfaz de usuario responsiva."
              ghLink="https://github.com/joel12sa/ProyectoSpringBoot"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AnalytikaWomen"
              description="Se trata de una aplicación web que incorpora funcionalidades de gestión y visualización de datos para mejorar la experiencia de los usuarios en la administración de aliados, consultores, eventos, y vacantes de empleo. Además, cuenta con una interfaz de usuario responsiva y mecanismos de autenticación modernos."
              ghLink="https://github.com/CarielR/proyectoweb"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flutter-Ciudades-Ecuador"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="Prowess">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MENTORIAS"
              description="
El proyecto es una plataforma de aprendizaje y mentorías diseñada para conectar emprendedores con mentores y recursos útiles que les ayuden a desarrollar sus ideas y proyectos. Está estructurada como un sistema web con una API backend que facilita la gestión de usuarios, productos, mentorías y contenido educativo."
              ghLink="https://github.com/Modulo-Mentorias-Prowess/web_build_prowess_mentorias"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
