import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Projects' exact component={Projects} />
    </Switch>
  </BrowserRouter>
);
