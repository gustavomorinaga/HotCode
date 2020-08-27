import React from 'react';

import Header from './components/Header';
import SectionInicio from './components/SectionInicio';
import SectionSobre from './components/SectionSobre';
import SectionAulas from './components/SectionAulas';
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

// Easter Egg!
console.log('Bora codar!');

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <SectionInicio />
        <SectionSobre />
        <SectionAulas />
      </main>
      <Footer />
    </div>
  );
}

export default App;
