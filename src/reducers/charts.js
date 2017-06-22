import {
  FETCH_DATA,
  FETCH_CHARTS_PERIOD
} from '../actions';

export default function (state = {
  isFetching: false,
  didInvalidatE: false,
  payload: {},
  period: {}
}, action) {
  switch (action.type) {
    case `${FETCH_DATA}_PENDING`: {
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
    
    case `${FETCH_DATA}_FULFILLED`: {
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        payload: action.payload,
        lastUpdated: action.receivedAt
      });
    }

    case `${FETCH_DATA}_REJECTED`: {
      return Object.assign({}, state, {
        didInvalidate: true
      });
    }

    case FETCH_CHARTS_PERIOD: {
      return Object.assign({}, state, {
        period : action.period
      });
    }

    default:
      return state;
  }
}