import { resolve, reject } from 'redux-simple-promise';
import {
  FETCH_CHART,
  FETCH_CHARTS,
  FETCH_CHARTS_PERIOD
} from '../actions/index';

const INITIAL_STATE = { all: {}, chart: {}, period: {}};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case resolve(FETCH_CHART): {
      return state;
    }
    
    case resolve(FETCH_CHARTS): {
      const data = action.data;
      return { ...state, all: data };
    }
    
    case resolve(FETCH_CHARTS_PERIOD): {
      return state;
    }
    
    default:
      return state;
  }
}