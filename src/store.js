import { applyMiddleware, createStore } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const routingMiddleware = routerMiddleware(browserHistory);
const middlewares = [promise(), routingMiddleware];
const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, undefined, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
export { store };
