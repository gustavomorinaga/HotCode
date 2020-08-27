import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './styles.css';

import Logo from '../../assets/images/icons/logo.svg';

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
