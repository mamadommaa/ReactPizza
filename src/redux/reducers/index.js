import filtersReducer from "../reducers/filters";
import pizzasReducer from "../reducers/pizzas";
import cartReducer from "../reducers/cart"
import { combineReducers } from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
});

export default rootReducer;
