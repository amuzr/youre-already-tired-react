import { combineReducers } from "redux";
import main from "./main";
import charts from "./charts";

export default combineReducers({
  main,
  charts
});