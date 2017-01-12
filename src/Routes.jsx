import React from 'react';
import {  Route, Router } from 'react-router';

import { history } from './store';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';

export default () => (
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </Route>
  </Router>
);