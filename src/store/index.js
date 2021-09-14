import { combineReducers } from "redux";
import { couterReducer } from "./reducers";

const rootReducer = combineReducers({
  counter: couterReducer,
});

export default rootReducer;
