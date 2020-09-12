import React from 'react';

import PageDefault from '../../components/PageDefault';

import SectionInicio from '../../components/SectionInicio';
import SectionSobre from '../../components/SectionSobre';
import SectionAulas from '../../components/SectionAulas';
import SectionAgenda from '../../components/SectionAgenda';
import SectionComunidade from '../../components/SectionComunidade';
import SectionInscricao from '../../components/SectionInscricao';

function Main() {
  return (
    <PageDefault>
      <SectionInicio />
      <SectionSobre />
      <SectionAulas />
      <SectionAgenda />
      <SectionComunidade />
      <SectionInscricao />
      {console.log('Bora codar!')}
    </PageDefault>
  );
}

export default Main;
