import React from 'react';
import Particles from "react-tsparticles";

const ParticlesParams = {
  detectRetina: true,
  fpsLimit: 30,
  background: {
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  particles: {
    color: {
      value: "#fff"
    },
    links: {
      value: "#fff",
      width: 2,
      distance: 200,
      opacity: 0.5,
      enable: true
    },
    number: {
      value: 20
    },
    opacity: {
      random: {
        enable: false
      },
      value: 1
    },
    size: {
      value: 4,
      animation: {
        enable: true,
        minimumValue: 0.5,
        speed: 10
      },
      random: {
        enable: true
      }
    },
    collisions: {
      enable: false,
    },
    move: {
      speed: 1,
      enable: true,
      outMode: "bounce"
    }
  }
}

function BannerParticles() {
  return (
    <>
      <Particles className="particles-back" width="100%" height="90vh" id="tsparticles" options={ParticlesParams} />
      <Particles className="particles-mid" width="100%" height="90vh" id="tsparticles" options={ParticlesParams} />
      <Particles className="particles-front" width="100%" height="90vh" id="tsparticles" options={ParticlesParams} />
    </>
  );
}

export default BannerParticles;
