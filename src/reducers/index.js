import { combineReducers } from "redux";
import main from "./main";
import chart from "./chart";

export default combineReducers({
  main,
  chart
});