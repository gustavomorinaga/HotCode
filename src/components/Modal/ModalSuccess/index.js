import React from 'react';

import Modal from '../../Modal';

import CloseIcon from '@material-ui/icons/Close';

import EmailSVG from '../../../assets/images/icons/email.svg';

import './styles.css';

function ModalSuccess() {
  return (
    <Modal>
      <button className="close-modal" onClick={() => {
        document.querySelectorAll('.modal')[0].classList.toggle('modal-active');
      }}>
        <CloseIcon className="modal-close" style={{ fontSize: 30 }} />
      </button>
      <div className="modal-success">
        <img src={EmailSVG} alt="ícone de E-Mail" />
        <h6>Inscrição realizada com sucesso!</h6>
        <p>
          Agora basta checar a sua caixa de entrada e/ou spam para seguir as instruções!
      </p>
      </div>
    </Modal>
  );
}

export default ModalSuccess;
