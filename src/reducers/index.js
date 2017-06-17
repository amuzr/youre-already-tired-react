import { combineReducers } from "redux";
import pages from "./pages";
import charts from "./charts";

export default combineReducers({
  pages,
  charts
});