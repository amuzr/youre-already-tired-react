import { OPEN_DRAWER } from '../actions';

export default function (state = {open:false}, action) {
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
}