import React from 'react';
import { Link } from "react-scroll";

import './styles.css';
import Logo from '../../assets/images/icons/logo.svg';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ClassIcon from '@material-ui/icons/Class';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

function Header() {
  return (
    <header>
      <Link
        activeClass="active"
        to="inicio"
        spy={true}
        hashSpy={true}
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
            hashSpy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><HomeIcon style={{ fontSize: '1.5em', marginRight: '3px' }} />Início</Link></li>
          <li><Link
            activeClass="active"
            to="sobre"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><InfoIcon style={{ fontSize: '1.5em', marginRight: '3px' }} />Sobre</Link></li>
          <li><Link
            activeClass="active"
            to="aulas"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-65}
            duration={500}
          ><ClassIcon style={{ fontSize: '1.5em', marginRight: '3px' }} />Aulas</Link></li>
          <li><Link
            activeClass="active"
            to="inicio"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><ScheduleIcon style={{ fontSize: '1.5em', marginRight: '3px' }} />Agenda</Link></li>
          <li><Link
            activeClass="active"
            to="comunidade"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-65}
            duration={500}
            isDynamic={true}
          ><ForumIcon style={{ fontSize: '1.5em', marginRight: '3px' }} />Comunidade</Link></li>
          <li><Link
            activeClass="active"
            to="inscricao"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-70}
            duration={500}
          ><AssignmentTurnedInIcon style={{ fontSize: '1.5em', marginRight: '3px' }} />Inscrição</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
