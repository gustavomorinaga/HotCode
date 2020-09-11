import React from 'react';
import { Link } from "react-scroll";

import BannerParticles from '../BannerParticles';
import ScrollArrow from '../ScrollArrow';

import './styles.css';

function SectionInicio() {
  return (
    <section className="section-inicio" id="inicio">
      <div className="bloom"></div>
      <BannerParticles />
      <div className="particle-texts">
        <h1 data-aos="fade-down">
          console.<b className="green-highlight">log</b><b className="yellow-highlight">('Bora codar!')</b>;
        </h1>
        <div className="text-center">
          <p data-aos="fade-right">
            Junte-se aos milhares de devs que estão participando do evento
            e leve suas habilidades em desenvolvimento web ao outro nível.
            <br/><br/>
            <b className="red-highlight">100%</b> gratuito. <b className="red-highlight">100%</b> online.
          </p>
          <div className="code-icon" data-aos="fade">
            <code>
              {`{</>}`}
            </code>
          </div>
        </div>
        <Link
          activeClass="active"
          to="sobre"
          spy={true}
          smooth={true}
          offset={-65}
          duration={500}
          style={{ margin: '0 auto' }}
        >
          <ScrollArrow />
        </Link>
      </div>
    </section>
  );
}

export default SectionInicio;
