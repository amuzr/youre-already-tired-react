import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/app';

import Main from './containers/Main';
import Chart from './containers/Chart';
import ChromePush from './containers/ChromePush';
import SlackBot from './containers/SlackBot';
import Introduce from './containers/Introduce';

export default (
  <App>
    <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
    <Route path={process.env.PUBLIC_URL + "/introduce"} component={Introduce} />
    <Route path={process.env.PUBLIC_URL + "/chart"} component={Chart} />
    
    <Route path={process.env.PUBLIC_URL + "/chromepush"} component={ChromePush} />
    <Route path={process.env.PUBLIC_URL + "/slackbot"} component={SlackBot} />
  </App>
);