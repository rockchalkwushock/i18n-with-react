import React from 'react';
import {  Route, Router } from 'react-router';

import { history } from './redux/store';
import App from './components/App';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

export default () => (
  <Router history={history}>
    <Route path='/' component={App}>
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </Route>
  </Router>
);