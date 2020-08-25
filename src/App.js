import React from 'react';

import Header from './components/Header';
import SectionInicio from './components/SectionInicio';
import SectionSobre from './components/SectionSobre';
import SectionAulas from './components/SectionAulas';

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
    </div>
  );
}

export default App;
