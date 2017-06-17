import { resolve, reject } from 'redux-simple-promise';
import {
  OPEN_DRAWER
} from '../actions/index';

const INITIAL_STATE = { open : false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case resolve(OPEN_DRAWER): {
      state.open = !state.open;
      return state;
    }
    
    default:
      return state;
  }
}