import filtersReducer from "../reducers/filters";
import pizzasReducer from "../reducers/pizzas";
import { combineReducers } from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
});

export default rootReducer;
