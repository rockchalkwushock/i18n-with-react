import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IntlReducer as Intl } from 'react-redux-multilingual'

export default combineReducers({
  Intl, // only pass as Intl do not make it xyz: Intl
  routing: routerReducer
});
