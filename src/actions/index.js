import 'isomorphic-fetch';

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_CANCEL = 'FETCH_DATA_CANCEL';
export const FETCH_CHART_PERIOD = 'FETCH_CHART_PERIOD';

export const CANCEL_FETCH = 'CANCEL_FETCH';

export function openDrawer(open) {
  return {type: OPEN_DRAWER, open};
}

export function fetchData() {
  return {type: FETCH_DATA };
}