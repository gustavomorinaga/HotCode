import React from 'react';

import Header from './components/Header';
import SectionInicio from './components/SectionInicio';
import SectionSobre from './components/SectionSobre';
import SectionAulas from './components/SectionAulas';
import SectionAgenda from './components/SectionAgenda';
import SectionComunidade from './components/SectionComunidade';
import SectionInscricao from './components/SectionInscricao';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-out-sine',
  delay: 150,
  once: true
});

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <SectionInicio />
        <SectionSobre />
        <SectionAulas />
        <SectionAgenda />
        <SectionComunidade />
        <SectionInscricao />
      </main>
      <Footer />
      {console.log('Bora codar!')}
    </div>
  );
}

export default App;
