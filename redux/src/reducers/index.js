import { combineReducers } from "redux";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
    countReducer : countReducer,
})

export default rootReducer;