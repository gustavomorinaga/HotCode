import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Erro from './pages/Erro';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route component={Erro} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
