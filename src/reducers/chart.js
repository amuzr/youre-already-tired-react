import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_CANCEL,
  CANCEL_FETCH,
  FETCH_CHART_PERIOD
} from '../actions'

export default function (state = {
  isFetching: false,
  didInvalidatE: false,
  payload: {},
  period: {
    type:'hours',
    val:1
  }
}, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    }
    
    case FETCH_DATA_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        payload: action.payload,
        lastUpdated: action.receivedAt
      });
    }

    case FETCH_DATA_FAILURE: {
      return Object.assign({}, state, {
        didInvalidate: true
      });
    }

    case FETCH_CHART_PERIOD: {
      return Object.assign({}, state, {
        period : action.period
      });
    }

    default:
      return state;
  }
}