import React, { Component, Children, cloneElement } from 'react';

import Sidebar from './sidebar';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('app !!');
  }

  render() {
    return (
      <div>
        <Sidebar />
        <hr />
        {Children.map(this.props.children, (child) => cloneElement(child, {}))}
      </div>
    );
  }
}