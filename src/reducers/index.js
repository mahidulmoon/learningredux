import CounterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: CounterReducer,
    isLogged: loggedReducer
})

export default allReducers;