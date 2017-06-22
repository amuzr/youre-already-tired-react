import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

const { ajax } = Rx.observable;

const OPEN_DRAWER = 'OPEN_DRAWER';
const FETCH_DATA = 'FETCH_DATA';
const FETCH_CHARTS_PERIOD = 'FETCH_CHARTS_PERIOD';

const openDrawer = open => Observable.of({type: OPEN_DRAWER, open: open});

const openReducer = (state = { open : false}, action) => {
  switch (action.type) {
    case OPEN_DRAWER: {
      if(state.open !== action.open) {
        return state;
      }
      return Object.assign({},state,{
        open : !action.open
      });
    }

    default:
      return state;
    
  }
};

const chartReducer = (state = {
  isFetching: false,
  didInvalidatE: false,
  payload: {},
  period: {}
}, action) => {
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
};

const fetchActionDataEpic = action$ =>
  action$.ofType(FETCH_DATA)
    .mergeMap(action => 
      ajax.getJSON('http://13.124.57.236/api')
        .map(response => fetchActionData(response))
    );


export const rootEpic = combineEpics(
  openEpic
)

export const rootReducer = combineReducers(
  open,
  chart
)