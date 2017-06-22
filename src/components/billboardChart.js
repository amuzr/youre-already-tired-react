import React, { Component } from 'react'
import { bb } from 'billboard.js'

class BillboardChart extends Component {
  
  renderChart(config) {
    if (!config) {
      throw new Error('Config must be specified for the component');
    }

    this.chart = bb.generate({
      bindto: this.elm,
      ...config
    })
  }

  getChart() {
    if(!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }

    return this.chart;
  }

  componentDidMount() {
    this.renderChart(this.props.config);
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={elm => this.elm = elm} />;
  }
}

export default BillboardChart;