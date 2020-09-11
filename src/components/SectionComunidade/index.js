import React from 'react';
import { Link } from "react-scroll";

import ScrollArrow from '../ScrollArrow';

import DiscordLogo from '../../assets/images/logos/discord.png';

import './styles.css';

function SectionComunidade() {
  return (
    <section className="section-comunidade" id="comunidade">
      <h3 data-aos="zoom-out">Comunidade</h3>
      <section className="content-comunidade">
        <div className="images images-left">
          <img src={DiscordLogo} alt="Discord Logotipo" data-aos="fade" data-aos-anchor-placement="bottom-bottom" />
        </div>
        <div className="texts" data-aos="flip-left">
          <h4>Dev Bom, é Dev Ativo</h4>
          <p>
            Você não estará só nesse evento: participe da nossa comunidade oficial 
            no <b>Discord</b> para tirar suas dúvidas e ajudar outros participantes, 
            além de ter a chance de ganhar um prêmio por colaboração!
          </p>
        </div>
      </section>
      <Link
        activeClass="active"
        to="inscricao"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{ margin: '0 auto' }}
      >
        <ScrollArrow />
      </Link>
    </section>
  );
}

export default SectionComunidade;
