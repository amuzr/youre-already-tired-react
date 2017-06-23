import { Observable } from 'rxjs/Observable';

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_CANCEL,
  CANCEL_FETCH
} from '../actions'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/takeUntil';

import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

export function fetchActionData(action$) {
  return action$.ofType(FETCH_DATA)
    .switchMap(() =>
      Observable.ajax.getJSON('http://13.124.57.236/api')
        .map(data => ({
          type: FETCH_DATA_SUCCESS,
          payload: { data: data },
        }))
        .takeUntil(action$.ofType(CANCEL_FETCH))
        .defaultIfEmpty({ type: FETCH_DATA_CANCEL })
        .catch(error => [
          {
            type: FETCH_DATA_FAILURE,
            payload: { message: 'error', status: 'error' },
            error: true,
          },
        ])
    );
}