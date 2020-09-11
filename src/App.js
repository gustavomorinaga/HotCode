import React from 'react';

import Main from './pages/Main';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { aosConfig } from './utils/aosConfig';

AOS.init(aosConfig);

function App() {
  return (
    <div className="container">
      <Main />
      {console.log('Bora codar!')}
    </div>
  );
}

export default App;
