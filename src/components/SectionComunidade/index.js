import React from 'react';
import { Link } from "react-scroll";

import ScrollArrow from '../ScrollArrow';

import DiscordLogo from '../../assets/images/logos/discord.png';

import './styles.css';

function SectionComunidade () {
  return (
    <section className="section-comunidade" id="comunidade">
      <h3 data-aos="zoom-out">Comunidade</h3>
      <section className="content-comunidade">
        <div className="images images-left">
          <img src={DiscordLogo} alt="Discord Logotipo" data-aos="fade" data-aos-anchor-placement="bottom-bottom"/>
        </div>
        <div className="texts" data-aos="flip-left">
          <h4>Dev bom, é Dev ativo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui delectus nemo exercitationem minus reprehenderit. Possimus quia nam doloribus, doloremque suscipit amet quas, cumque accusamus, quidem soluta nemo recusandae culpa.
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
          style={{ width: '100%', height: '100%' }}
        >
          <ScrollArrow />
        </Link>
    </section>
  );
}

export default SectionComunidade;
