import { combineReducers } from "redux";
import shopReducer from "./shop";
import cartReducer from "./cart";
import generalReducer from "./general";

export default combineReducers({
    generalReducer,
    shopReducer,
    cartReducer
});
