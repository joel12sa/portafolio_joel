import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">[Joel Sasig]</span> de 
            <span className="purple"> Ecuador.</span>
            <br />
            Soy estudiante de software en la Universidad de las Fuerzas Armadas ESPE.
            <br />
            Actualmente estoy trabajando en proyectos y arquitecturas basadas en APIs y contenedores Docker.
            <br />
            <br />
            Además de la programación, algunas otras actividades que me encanta hacer:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer libros
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuerzo por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">Joel Sasig</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



