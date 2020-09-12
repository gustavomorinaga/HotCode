import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function PageDefault ({ children }) {
  return (
    <div className="container">
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  );
}

export default PageDefault;
