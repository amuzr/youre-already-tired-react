import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/app';
import Main from './pages/Main';
import Chart from './pages/Chart';

export default (
  <App>
    <Route exact path="/" component={Main} />
    <Route path="/chart" component={Chart} />
  </App>
);