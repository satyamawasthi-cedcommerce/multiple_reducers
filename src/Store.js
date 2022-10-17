import { createStore, combineReducers } from "redux";
import {
  addReducer,
  divideReducer,
  multiplyReducer,
  subReducer,
} from "./Redux/reducer";
const rootReducer = combineReducers({
  add: addReducer,
  sub: subReducer,
  mul: multiplyReducer,
  div: divideReducer,
});

const store = createStore(rootReducer);

export default store;
