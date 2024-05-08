import filtersReducer from "../reducers/filters";
import pizzasReducer from "../reducers/pizzas";
import cartReducer from "../reducers/cart"
import userReducer from '../reducers/user'
import { combineReducers } from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer,
    user: userReducer,
});

export default rootReducer;
