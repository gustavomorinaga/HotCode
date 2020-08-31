import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

import { getAll } from '../../repositories/emails';
import ScrollArrow from '../ScrollArrow';

import './styles.css';

function SectionSobre() {
  const [totalSubscriptions, setTotalSubscriptions] = useState(0);

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/subscriptions' : 'https://hotcode.herokuapp.com/subscriptions';
    fetch(url).then(async (res) => {
      const total = await res.json();
      setTotalSubscriptions(total.length);
    });
  }, []);

  return (
    <section className="section-sobre" id="sobre">
      <div className="wave-particles">
        <div className="content-sobre">
          <h2 data-aos="fade-down">Sobre o evento</h2>
          <p data-aos="fade-up" className="text-sobre">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a doloribus iure quasi. Incidunt voluptatibus est doloribus minus dolor nostrum libero dicta distinctio fugit minima magnam nemo, ad amet eaque?
          </p>
          <p className="subscriptions">
            Mais de <b>{totalSubscriptions}</b> pessoas já se inscreveram no evento!
          </p>
          <Link
            activeClass="active"
            to="aulas"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            <ScrollArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;
