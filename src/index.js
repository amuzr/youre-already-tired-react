import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import promise from 'redux-simple-promise';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import reducers from "./reducers";

import App from './components/app';
import Main from './pages/Main';
import Chart from './pages/Chart';

const promiseMiddleware = promise();
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  loggerMiddleware
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App>
        <Route exact path="/" component={Main} />
        <Route path="/chart" component={Chart} />
      </App>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();