import React from 'react';

import './styles.css';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import NotebookImg from '../../assets/images/notebook.png';

function SectionInscricao() {
  return (
    <section className="section-inscricao" id="inscricao">
      <h3 data-aos="zoom-out">Inscrição</h3>
      <section className="content-inscricao">
        <div className="images" data-aos="fade">
          <p>Você irá aprender a criar o seu próprio Netflix durante o evento!</p>
          <img src={NotebookImg} alt="Imagem de Notebook" />
        </div>
        <div className="card-inscricao" data-aos="flip-left">
          <h4>Inscreva-se para o evento</h4>
          <p>
            Digite seu email abaixo para participar
          </p>
          <form>
            <div className="input-email">
              <div className="email-icon">
                <AlternateEmailIcon style={{ fontSize: '1.5em', color: 'var(--color-white)' }} />
              </div>
              <label for="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-Mail *"
                  maxlength="60"
                />
              </label>
            </div>
            <button>
              Quero participar
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default SectionInscricao;
