import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products.js/productsReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default rootReducer;