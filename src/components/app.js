import React, { Component, Children, cloneElement } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import SideBar from './sidebar';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <SideBar />
          {Children.map(this.props.children, (child) => cloneElement(child, {}))}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);