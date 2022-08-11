import { combineReducers } from "redux";
import { getServiceReducers } from "./Reducers/serviceReducer.js/serviceReduces";

export const rootReducer = combineReducers({
  getService: getServiceReducers,
});
