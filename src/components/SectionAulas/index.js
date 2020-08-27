import React from 'react';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import './styles.css';

// Logos Front-End
import HTMLLogo from '../../assets/images/logos/html.png';
import CSSLogo from '../../assets/images/logos/css.png';
import ReactLogo from '../../assets/images/logos/react.png';

// Logos Back-End
import NodeLogo from '../../assets/images/logos/node.png';
import GraphQLLogo from '../../assets/images/logos/graphql.png';
import InsomniaLogo from '../../assets/images/logos/insomnia.png';

// Logos Conteúdo Extra
import FigmaLogo from '../../assets/images/logos/figma.png';
import WhimsicalLogo from '../../assets/images/logos/whimsical.png';
import ExpoLogo from '../../assets/images/logos/expo.png';

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
