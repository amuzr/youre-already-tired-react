import React, { Component, Children, cloneElement } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SideBar from './sidebar';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('app !!');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SideBar />
          {Children.map(this.props.children, (child) => cloneElement(child, {}))}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);