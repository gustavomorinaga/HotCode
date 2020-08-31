import React from 'react';

import useForm from '../../hooks/useForm';
import EmailRepository from '../../repositories/emails';
import ModalSuccess from '../Modal/ModalSuccess';
import ModalFailure from '../Modal/ModalFailure';

import './styles.css';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import NotebookImg from '../../assets/images/notebook.png';

function SectionInscricao() {
  const valoresIniciais = {
    email: ''
  };

  const { handleChange, clearForm, values } = useForm(valoresIniciais);

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
            Digite seu e-mail abaixo para participar, iremos-lhe mandar as próximas instruções:
          </p>
          <form onSubmit={e => {
            e.preventDefault();

            const modalSuccess = document.querySelectorAll('.modal')[0];
            const modalFailure = document.querySelectorAll('.modal')[1];

            EmailRepository.create({
              email: values.email
            }).then(() => {
              modalSuccess.classList.toggle('modal-active');
            }).catch(() => {
              modalFailure.classList.toggle('modal-active');
            });

            clearForm(valoresIniciais);
          }}>
            <div className="input-email">
              <div className="email-icon">
                <AlternateEmailIcon style={{ fontSize: '1.5em', color: 'var(--color-white)' }} />
              </div>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  placeholder="E-Mail *"
                  maxLength="60"
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">
              Quero participar
            </button>
          </form>
        </div>
      </section>
      <ModalSuccess />
      <ModalFailure />
    </section>
  );
}

export default SectionInscricao;
