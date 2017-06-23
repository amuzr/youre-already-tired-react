/**
 * @module Epics/Root
 * @desc Root Epics
 */

import { combineEpics } from 'redux-observable';
import { fetchActionData } from './chart';

export default combineEpics(
  fetchActionData
);