import { combineReducers } from "redux";
import {
  userReducer,
  userReducerById,
  deleteReducerById,
  modifyReducer,
  userReducerByName
} from "../Reducers/reducer";

const rootReducers = combineReducers({
  userReducer,
  userReducerById,
  deleteReducerById,
  modifyReducer,
  userReducerByName,
});
export default rootReducers;
