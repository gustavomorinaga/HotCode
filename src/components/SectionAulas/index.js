import React from 'react';

import './styles.css';

import HTMLLogo from '../../assets/images/html.png';
import CSSLogo from '../../assets/images/css.png';
import ReactLogo from '../../assets/images/react.png';

import NodeLogo from '../../assets/images/node.png';
import GraphQLLogo from '../../assets/images/graphql.png';
import InsomniaLogo from '../../assets/images/insomnia.png';

import FigmaLogo from '../../assets/images/figma.png';
import WhimsicalLogo from '../../assets/images/whimsical.png';
import ExpoLogo from '../../assets/images/expo.png';

function SectionAulas() {
  return (
    <section className="section-aulas" id="aulas">
      <h3 data-aos="zoom-out">Aulas</h3>
      <section className="content-frontend">
        <div className="texts" data-aos="flip-right">
          <h4>Front-End</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui delectus nemo exercitationem minus reprehenderit. Possimus quia nam doloribus, doloremque suscipit amet quas, cumque accusamus, quidem soluta nemo recusandae culpa.
          </p>
        </div>
        <div className="images images-right">
          <img src={HTMLLogo} alt="HTML Logotipo" data-aos="fade"/>
          <img src={CSSLogo} alt="CSS Logotipo" data-aos="fade" data-aos-delay="500"/>
          <img src={ReactLogo} alt="React Logotipo" data-aos="fade" data-aos-delay="1000"/>
        </div>
      </section>
      <section className="content-backend">
        <div className="texts" data-aos="flip-left">
          <h4>Back-End</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui delectus nemo exercitationem minus reprehenderit. Possimus quia nam doloribus, doloremque suscipit amet quas, cumque accusamus, quidem soluta nemo recusandae culpa.
          </p>
        </div>
        <div className="images images-left">
          <img src={NodeLogo} alt="Node.JS Logotipo" data-aos="fade"/>
          <img src={GraphQLLogo} alt="GraphQL Logotipo" data-aos="fade" data-aos-delay="500"/>
          <img src={InsomniaLogo} alt="Insomnia Logotipo" data-aos="fade" data-aos-delay="1000"/>
        </div>
      </section>
      <section className="content-extra">
        <div className="texts" data-aos="flip-right">
          <h4>Conteúdo Bônus</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui delectus nemo exercitationem minus reprehenderit. Possimus quia nam doloribus, doloremque suscipit amet quas, cumque accusamus, quidem soluta nemo recusandae culpa.
          </p>
        </div>
        <div className="images images-right">
          <img src={FigmaLogo} alt="Figma Logotipo" data-aos="fade"/>
          <img src={WhimsicalLogo} alt="Whimsical Logotipo" data-aos="fade" data-aos-delay="500"/>
          <img src={ExpoLogo} alt="Expo Logotipo" data-aos="fade" data-aos-delay="1000"/>
        </div>
      </section>
    </section>
  );
}

export default SectionAulas;
