import 'isomorphic-fetch';

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_CHARTS_PERIOD = 'FETCH_CHARTS_PERIOD';

export function openDrawer(open) {
  return {type: OPEN_DRAWER, open};
}

export function fetchActionData(data) {
  return {
    type: FETCH_DATA,
    payload: new Promise(resolve => {
      setTimeout(() => fetch('http://13.124.57.236/api',{
        mode: 'no-cors'
      }).then(response => {
        resolve(response.json());
      }), 1000)
    }),
    receivedAt: Date.now()
  };
}