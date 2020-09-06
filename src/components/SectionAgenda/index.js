import React from 'react';
import { Link } from "react-scroll";

import ScrollArrow from '../ScrollArrow';

import './styles.css';

import MonitorImg from '../../assets/images/icons/monitor.png';
import GearImg from '../../assets/images/icons/gear.png';
import DatabaseImg from '../../assets/images/icons/database.png';
import SmartphoneImg from '../../assets/images/icons/smartphone.png';
import RocketImg from '../../assets/images/icons/rocket.png';

function SectionAgenda() {
  return (
    <section className="section-agenda" id="agenda">
      <h3 data-aos="zoom-out">Agenda</h3>
      <section className="content-agenda">
        <ul>
          <li>
            <section data-aos="fade" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom">
              <img src={GearImg} alt="Monitor"/>
              <p>Configurando a área de trabalho</p>
              <h5>Segunda-feira</h5>
            </section>
          </li>
          <li>
            <section data-aos="fade" data-aos-delay="1000" data-aos-anchor-placement="bottom-bottom">
              <img src={MonitorImg} alt="Configuração"/>
              <p>Desenvolvendo o Front-End</p>
              <h5>Terça-feira</h5>
            </section>
          </li>
          <li>
            <section data-aos="fade" data-aos-delay="1500" data-aos-anchor-placement="bottom-bottom">
              <img src={DatabaseImg} alt="Banco de Dados"/>
              <p>Desenvolvendo o Back-End</p>
              <h5>Quarta-feira</h5>
            </section>
          </li>
          <li>
            <section data-aos="fade" data-aos-delay="2000" data-aos-anchor-placement="bottom-bottom">
              <img src={SmartphoneImg} alt="Mobile"/>
              <p>Desenvolvendo a versão Mobile</p>
              <h5>Quinta-feira</h5>
            </section>
          </li>
          <li>
            <section data-aos="fade" data-aos-delay="2500" data-aos-anchor-placement="bottom-bottom">
              <img src={RocketImg} alt="Foguete"/>
              <p>Contéudos extras e dicas</p>
              <h5>Sexta-feira</h5>
            </section>
          </li>
        </ul>
      </section>
      <Link
        activeClass="active"
        to="comunidade"
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

export default SectionAgenda;
