import React from 'react';

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
    </section>
  );
}

export default SectionComunidade;
