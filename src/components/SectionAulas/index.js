import React from 'react';
import { Link } from "react-scroll";

import ScrollArrow from '../ScrollArrow';

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
            Iremos utilizar <b>HTML</b> e <b>CSS</b> para estruturação e estilização das páginas, 
            além de usar o <b>React</b> para facilitar o reuso de componentes e implementação de funções
            no projeto.
          </p>
        </div>
        <div className="images images-right">
          <img src={HTMLLogo} alt="HTML Logotipo" data-aos="fade" data-aos-anchor-placement="bottom-bottom" />
          <img src={CSSLogo} alt="CSS Logotipo" data-aos="fade" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom" />
          <img src={ReactLogo} alt="React Logotipo" data-aos="fade" data-aos-delay="1000" data-aos-anchor-placement="bottom-bottom" />
        </div>
      </section>
      <section className="content-backend">
        <div className="texts" data-aos="flip-left">
          <h4>Back-End</h4>
          <p>
            Com <b>Node.js</b>, podemos gerenciar e instalar todas as dependências do nosso projeto, 
            estruturando e conectando o banco de dados via <b>GraphQL</b> e 
            validando os testes de APIs no <b>Insomnia</b>.
          </p>
        </div>
        <div className="images images-left">
          <img src={NodeLogo} alt="Node.JS Logotipo" data-aos="fade" data-aos-anchor-placement="bottom-bottom" />
          <img src={GraphQLLogo} alt="GraphQL Logotipo" data-aos="fade" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom" />
          <img src={InsomniaLogo} alt="Insomnia Logotipo" data-aos="fade" data-aos-delay="1000" data-aos-anchor-placement="bottom-bottom" />
        </div>
      </section>
      <section className="content-extra">
        <div className="texts" data-aos="flip-right">
          <h4>Conteúdo Bônus</h4>
          <p>
            Iremos desenvolver uma versão mobile com <b>Expo</b> e, por fim, 
            você aprenderá a criar protótipos do seu próprio projeto com <b>Whimsical</b> e montar
            o design das páginas no <b>Figma</b>.
          </p>
        </div>
        <div className="images images-right">
          <img src={FigmaLogo} alt="Figma Logotipo" data-aos="fade" data-aos-anchor-placement="bottom-bottom" />
          <img src={WhimsicalLogo} alt="Whimsical Logotipo" data-aos="fade" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom" />
          <img src={ExpoLogo} alt="Expo Logotipo" data-aos="fade" data-aos-delay="1000" data-aos-anchor-placement="bottom-bottom" />
        </div>
      </section>
      <Link
        activeClass="active"
        to="agenda"
        spy={true}
        smooth={true}
        offset={-65}
        duration={500}
        style={{ margin: '0 auto' }}
      >
        <ScrollArrow />
      </Link>
    </section>
  );
}

export default SectionAulas;
