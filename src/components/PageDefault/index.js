import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function PageDefault ({ children }) {
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  );
}

export default PageDefault;
