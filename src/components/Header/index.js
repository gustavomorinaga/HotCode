import React from 'react';
import { Link } from "react-scroll";

import './styles.css';
import Logo from '../../assets/images/icons/logo.svg';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ClassIcon from '@material-ui/icons/Class';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ForumIcon from '@material-ui/icons/Forum';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
            onClick={() => {
              document.querySelectorAll('ul')[0].classList.remove('menu-toggle');
              document.body.classList.remove('block-overflow');
            }}
          ><HomeIcon />Início</Link></li>
          <li><Link
            activeClass="active"
            to="sobre"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-65}
            duration={500}
            onClick={() => {
              document.querySelectorAll('ul')[0].classList.remove('menu-toggle');
              document.body.classList.remove('block-overflow');
            }}
          ><InfoIcon />Sobre</Link></li>
          <li><Link
            activeClass="active"
            to="aulas"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-65}
            duration={500}
            onClick={() => {
              document.querySelectorAll('ul')[0].classList.remove('menu-toggle');
              document.body.classList.remove('block-overflow');
            }}
          ><ClassIcon />Aulas</Link></li>
          <li><Link
            activeClass="active"
            to="agenda"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-65}
            duration={500}
            onClick={() => {
              document.querySelectorAll('ul')[0].classList.remove('menu-toggle');
              document.body.classList.remove('block-overflow');
            }}
          ><ScheduleIcon />Agenda</Link></li>
          <li><Link
            activeClass="active"
            to="comunidade"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-65}
            duration={500}
            isDynamic={true}
            onClick={() => {
              document.querySelectorAll('ul')[0].classList.remove('menu-toggle');
              document.body.classList.remove('block-overflow');
            }}
          ><ForumIcon />Comunidade</Link></li>
          <li><Link
            activeClass="active"
            to="inscricao"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => {
              document.querySelectorAll('ul')[0].classList.remove('menu-toggle');
              document.body.classList.remove('block-overflow');
            }}
          ><AssignmentTurnedInIcon />Inscrição</Link></li>
        </ul>
      </nav>
      <div
        className="menu-icon"
        id="menu"
        onClick={() => {
          document.querySelectorAll('ul')[0].classList.toggle('menu-toggle');
          document.body.classList.toggle('block-overflow');
        }}
      >
        <MenuIcon />
      </div>
      <div className="github-icon">
        <a href="https://github.com/gmatthewsfeuer/HotCode" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ fontSize: '2em', color: '#fff' }} /></a>
      </div>
    </header>
  );
}

export default Header;
