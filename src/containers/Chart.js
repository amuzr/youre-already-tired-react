import React, { Component } from 'react';
import { connect } from 'react-redux';
import BillboardChart from '../components/billboardChart'
import { Observable } from 'rxjs/Observable';
import moment from 'moment';
import _ from 'lodash';

import { fetchData } from '../actions';

class Chart extends Component {
  componentDidMount() {
    if(!this.props.isInit) this.props.init();
  }

  render() {
    const { payload, period } = this.props;
    const series = {};
    _.forEach(payload.data,function(row){
      if(!series[row.action_type]) series[row.action_type] = [];
      series[row.action_type].push(row.cnt);
    });

    const data = _.map(series,function(row,key){
      return [key, ...row];
    });

    let groupedResults = _.groupBy(payload.data, (result) => moment(result.current_dt).startOf('isoWeek'));

    console.log('data : ',groupedResults);

    const config = {
       data: {
        columns: data
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
  const { chart } = state;
  return chart;
}

const chartDispatchToProps = (dispatch) => {  
  return dispatch => ({
    init: () => dispatch(fetchData())
  })
}

export default connect(
  chartStateToProps,chartDispatchToProps
)(Chart);