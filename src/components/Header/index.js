import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './styles.css';
import Logo from '../../assets/images/icons/logo.svg';

function Header() {
  return (
    <header>
      <Link
        activeClass="active"
        to="inicio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className="logo">
          Hot<b>Code</b>
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <nav>
        <ul>
          <li><Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Início</Link></li>
          <li><Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Sobre</Link></li>
          <li><Link
            activeClass="active"
            to="aulas"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Aulas</Link></li>
          <li><Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Agenda</Link></li>
          <li><Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Comunidade</Link></li>
          <li><Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Inscrição</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
