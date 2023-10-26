import { combineReducers } from "redux";
import {userReducer,userReducerById,deleteReducerById} from "../Reducers/reducer"

const rootReducers = combineReducers(
    {userReducer,
    userReducerById,
    deleteReducerById
});
export default rootReducers;