import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import {Provider} from 'react-redux';
import { IntlProvider, IntlActions } from 'react-redux-multilingual';
import { store } from './redux/store';
import routes from './routes';
import translations from './i18n/translations';
import { history } from './redux/store';

const DEFAULT_LANGUAGE = 'ru';
// Dispatch the default language for the application to run in on mounting.
store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));

render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <Router history={history}  routes={routes} />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);