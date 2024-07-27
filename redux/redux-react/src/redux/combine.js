import {thunk} from "redux-thunk"
import { legacy_createStore } from "redux";
import { reducer } from "./icecream/reduce";
import Cake_reducer from "./cake/Reducer";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger"
import {reducers}  from "./fetchData/Reducer";
const rootReducer=combineReducers({
    cake:Cake_reducer,
    icecream:reducer,
    users:reducers
})
const store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;