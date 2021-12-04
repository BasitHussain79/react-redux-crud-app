import { combineReducers } from "redux";
import userReducer from "./reducer";
const rootReducer = combineReducers({
    allUser: userReducer,
})

export default rootReducer;
