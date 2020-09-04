import React from 'react';

import Main from './pages/Main';

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
      <Main />
      {console.log('Bora codar!')}
    </div>
  );
}

export default App;
