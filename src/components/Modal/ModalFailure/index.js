import React from 'react';

import Modal from '../../Modal';

import CloseIcon from '@material-ui/icons/Close';

import AlertSVG from '../../../assets/images/icons/alert.svg';

import './styles.css';

function ModalFailure() {
  return (
    <Modal>
      <button className="close-modal" onClick={() => {
        document.querySelectorAll('.modal')[1].classList.toggle('modal-active');
      }}>
        <CloseIcon className="modal-close" style={{ fontSize: 30 }} />
      </button>
      <div className="modal-failure">
        <img src={AlertSVG} alt="ícone de alerta" />
        <h6>Erro ao inscrever-se no evento!</h6>
        <p>
          Algum problema ocorreu durante a inscrição, tente novamente mais tarde!
      </p>
      </div>
    </Modal>
  );
}

export default ModalFailure;
