import React, { Component } from 'react';
import { connect } from 'react-redux';
import BillboardChart from '../components/billboardChart'
import { Observable } from 'rxjs/Observable';
import moment from 'moment';
import _ from 'lodash';
import {
  white
} from 'material-ui/styles/colors';
import { Paper, SelectField, MenuItem, Divider } from 'material-ui';

import { fetchData, changePeriod } from '../actions';

class Chart extends Component {
  componentDidMount() {
    if(!this.props.isInit) this.props.init();
  }

  handleChangeType = (event, index, value) => this.props.changePeriod({...this.props.period,type:value});

  handleChangeValue = (event, index, value) => this.props.changePeriod({...this.props.period,val:value});

  render() {
    const { payload, period } = this.props;
    const series = {};
    const now = moment();

    function round(date, duration, method) {
      return moment(Math[method]((+date) / (+duration)) * (+duration)).format('MM/DD HH');
    }

    let actionTypes = _.map(_.uniqBy(payload.data,'action_type'),'action_type');
    let categorized = _.groupBy(payload.data, (result) => round(moment(result.current_dt), moment.duration(period.val, period.type), "ceil"));

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
      <div>
        <div style={{margin:'5px 10px'}}>
          <h3>피로도</h3>
          <Divider />
          <p>피로도를 차트로 보여줍니다.</p>
        </div>
        
        <div style={{margin:'5px 10px'}}>
          <SelectField
            floatingLabelText="단위"
            value={period.type}
            onChange={(this.handleChangeType)}
            style={{marginRight:'10px'}}
          >
            <MenuItem value={'hours'} primaryText="Hour" />
            <MenuItem value={'days'} primaryText="Day" />
          </SelectField>
          <SelectField
            floatingLabelText="간격"
            value={period.val}
            onChange={(this.handleChangeValue)}
            style={{marginRight:'10px'}}
          >
            <MenuItem value={1} primaryText="1" />
            <MenuItem value={2} primaryText="2" />
            <MenuItem value={3} primaryText="3" />
          </SelectField>
        </div>
        <Paper style={{margin:'0 10px',padding:'10px'}}>
          <BillboardChart config={config} />
        </Paper>
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
    init: () => dispatch(fetchData()),
    changePeriod: (period) => dispatch(changePeriod(period))
  })
}

export default connect(
  chartStateToProps,chartDispatchToProps
)(Chart);