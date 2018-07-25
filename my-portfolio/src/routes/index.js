import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
    </Switch>
  </BrowserRouter>
);
