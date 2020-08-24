import React from 'react';

import Header from './components/Header';
import SectionInicio from './components/SectionInicio';
import SectionSobre from './components/SectionSobre';

// Easter Egg!
console.log('Bora codar!');

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <SectionInicio />
        <SectionSobre />
      </main>
    </div>
  );
}

export default App;
