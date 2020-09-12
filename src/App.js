import React from 'react';

import Routes from './routes';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { aosConfig } from './utils/aosConfig';

AOS.init(aosConfig);

function App() {
  return (
    <Routes />
  );
}

export default App;
