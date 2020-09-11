import React from 'react';
import { Link } from "react-scroll";

import './styles.css';

import Logo from '../../assets/images/icons/logo.svg';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
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
        <a href="https://github.com/gmatthewsfeuer/HotCode" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ fontSize: '2em', color: '#fff' }} /></a>
      </div>
      <div className="footer-info">
        <p>Vetores criados por {'\n'}
          <a href="https://www.freepik.com/vectors/background"
            target="_blank"
            rel="noopener noreferrer"
          >coolvector</a>, <a href="https://www.freepik.com/vectors/background"
          target="_blank"
          rel="noopener noreferrer"
        >starline</a>, {'\n'}
          <a href="https://smashicons.com/"
            title="Smashicons"
            target="_blank"
            rel="noopener noreferrer"
          >smashicons</a>,
          e {'\n'}
          <a href="https://www.flaticon.com/authors/prettycons"
            title="prettycons"
            target="_blank"
            rel="noopener noreferrer"
          >prettycons</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
