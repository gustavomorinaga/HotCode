import React from 'react';
import Particles from 'react-particles-js';

import './styles.css';

function SectionInicio () {
  const ParticlesParams = {
    "detectRetina": true,
    "fpsLimit": 60,
    "background": {
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover",
    },
    "particles": {
      "color": {
        "value": "#fff"
      },
      "links": {
        "value": "#fff",
        "width": 2,
      },
      "number": {
        "value": 30
      },
      "size": {
        "value": 4
      },
    },
    "interactivity": {
      "detectsOn": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab",
          "parallax": {
            "enable": true,
            "force": 60,
            "smooth": 10
          }
        }
      }
    }
  }

  return (
    <section class="section-inicio">
      <div class="bloom"></div>
      <Particles width="100%" height="100%" params={ParticlesParams} style={{ position: 'absolute', top: 0, left: 0, filter: 'blur(4px)' }} />
      <Particles width="100%" height="100%" params={ParticlesParams} style={{ position: 'absolute', top: 0, left: 0, filter: 'blur(2px)' }} />
      <Particles width="100%" height="100%" params={ParticlesParams} style={{ position: 'absolute', top: 0, left: 0 }} />
    </section>
  );
}

export default SectionInicio;
