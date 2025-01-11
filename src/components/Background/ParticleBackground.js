import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  // Inicializa el motor de partículas
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1, // Asegúrate de que las partículas queden en el fondo
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#000000" }, // Color de las partículas
            shape: { type: "circle" }, // Forma de las partículas
            opacity: { value: 0.5 }, // Opacidad para mejorar visibilidad
            size: { value: 3 }, // Tamaño de las partículas
            move: {
              enable: true,
              speed: 1, // Velocidad de las partículas
              direction: "none", // Movimiento aleatorio
              random: false,
              straight: false,
              outModes: {
                default: "bounce", // Comportamiento cuando las partículas salen de la pantalla
              },
            },
          },
          detectRetina: true, // Detección de retina para dispositivos con pantallas de alta resolución
          fullScreen: false, // Las partículas no deben ocupar toda la pantalla
          background: {
            color: "#000000", // Fondo blanco para las partículas
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;
