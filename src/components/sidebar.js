import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/chart">Chart</Link></li>
      </ul>
    );
  }
}