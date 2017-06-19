import { resolve, reject } from 'redux-simple-promise';
import {
  FETCH_CHART,
  FETCH_CHARTS,
  FETCH_CHARTS_PERIOD
} from '../actions';

export default function (state = { all: {}, chart: {}, period: {}}, action) {
  switch (action.type) {
    case resolve(FETCH_CHART): {
      return state;
    }
    
    case resolve(FETCH_CHARTS): {
      const data = action.data;
      return { ...state, all: data };
    }

    case FETCH_CHARTS_PERIOD: {
      return state;
    }
    
    case resolve(FETCH_CHARTS_PERIOD): {
      return state;
    }

    case reject(FETCH_CHARTS_PERIOD): {
      return state;
    }
    
    default:
      return state;
  }
}