import React from 'react';

import './styles.css';
import Logo from '../../assets/images/icons/logo.svg';

function Header () {
  return (
    <header>
      <div className="logo">
        Hot<b>Code</b>
        <img src={Logo} alt="Logo"/>
      </div>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Aulas</a></li>
          <li><a href="#">Agenda</a></li>
          <li><a href="#">Comunidade</a></li>
          <li><a href="#">Inscrição</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
