export const OPEN_DRAWER = 'OPEN_DRAWER';

export const FETCH_CHART = 'FETCH_CHART';

export const FETCH_CHARTS = 'FETCH_CHARTS';
export const FETCH_CHARTS_PERIOD = 'FETCH_CHARTS_PERIOD';

function openDrawer(open) {
  return {type: OPEN_DRAWER, open};
}

export {
  openDrawer
}