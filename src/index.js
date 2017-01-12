import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { IntlProvider, IntlActions } from 'react-redux-multilingual';
import { store } from './redux/store';
import Routes from './Routes';
import translations from './i18n/translations';

const DEFAULT_LANGUAGE = 'en';
// Dispatch the default language for the application to run in on mounting.
store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));

render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <Routes />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);