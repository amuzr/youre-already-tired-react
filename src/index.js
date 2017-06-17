import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import promise from 'redux-simple-promise';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

import reducers from "./reducers";
import routes from "./routes";

const promiseMiddleware = promise();
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  loggerMiddleware
)(createStore);

console.log('provider');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router children={routes} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();