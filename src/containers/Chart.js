import React, { Component } from 'react';
import { connect } from 'react-redux';
import BillboardChart from '../components/billboardChart'
import { Observable } from 'rxjs/Observable';
import moment from 'moment';
import _ from 'lodash';
import {
  white
} from 'material-ui/styles/colors';

import { fetchData } from '../actions';

class Chart extends Component {
  componentDidMount() {
    if(!this.props.isInit) this.props.init();
  }

  render() {
    const chartStyle = {
      padding:'30px 0'
    };

    const { payload, period } = this.props;
    const series = {};

    let actionTypes = _.map(_.uniqBy(payload.data,'action_type'),'action_type');
    let categorized = _.groupBy(payload.data, (result) => moment(result.current_dt).startOf('hour').format('YY/MM/DD hh'));

    const categories = _.keys(categorized);
    _(categorized).map(function(category,key){
      return _(category)
          .groupBy('action_type')
          .mapValues((row) => _.sumBy(row,'cnt'))
          .value();
    }).forEach(function(row){
      _.forEach(actionTypes, function(type){
        if(!series[type]) series[type] = [];
        series[type].push(row[type] !== undefined ? row[type] : 0);
      });
    });

    const data = _.map(series,function(row,key){
      return [key, ...row];
    });

    const config = {
      data: {
        columns: data,
        type:'spline'
      }
    };

    if(categories) {
      config.axis = {
        x: {
          type: "category",
          categories: categories
        }
      }
    }

    return (
      <div style={chartStyle}>
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