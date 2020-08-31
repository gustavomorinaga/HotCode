import React from 'react';

import './styles.css';

function Modal({ children }) {
  return (
    <section className="modal">
      <div>
        {children}
      </div>
    </section>
  );
}

export default Modal;
