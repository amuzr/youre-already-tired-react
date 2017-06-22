import React, { Component } from 'react';
import { connect } from 'react-redux';
import BillboardChart from '../components/billboardChart'

import { fetchActionData } from '../actions';

class Chart extends Component {
  componentDidMount() {
    if(!this.props.isInit) this.props.init();
  }

  render() {
    const { payload, period } = this.props;
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

const chartStateToProps = (state) => {
  const { charts } = state;
  return charts;
}

const chartDispatchToProps = (dispatch) => {  
  return dispatch => ({
    init: () => dispatch(fetchActionData())
  })
}

export default connect(
  chartStateToProps,chartDispatchToProps
)(Chart);