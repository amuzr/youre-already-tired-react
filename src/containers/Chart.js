import React, { Component } from 'react';
import BillboardChart from '../components/billboardChart'

export default class Chart extends Component {
  render() {
    const config = {
       data: {
        columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 130, 100, 140, 35, 110, 50]
        ]
      }
    };

    return (
      <div>
        <BillboardChart config={config} />
      </div>
    );
  }
}
