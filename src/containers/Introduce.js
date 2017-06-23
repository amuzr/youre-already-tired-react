import React, { Component } from 'react';
import {
  pink500,
  white
} from 'material-ui/styles/colors';
import { Paper, Divider } from 'material-ui';

export default class Introduce extends Component {
  render() {
    return (
      <div>
        <div style={{margin:'5px 10px'}}>
          <h3>Introduce</h3>
          <Divider />
          <p>너는 이미 피곤하다 !!!</p>
        </div>
      </div>
    )
  }
}