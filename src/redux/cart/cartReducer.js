import { ADD_TO_CART, CHECKOUT, DECREMENT_PRODUCT, EMPTY_CART, INCREMENT_PRODUCT, REMOVE_FROM_CART } from "./ActionTypes";



export const initialState = {
    cart: [],
    cartCounter: 0,
    total: 0,
    checkout: false
}
const cartReducer = (state = initialState, action) => {
    let newCart = [];
    let checkout = false;
    switch (action.type) {
        case ADD_TO_CART:
            newCart = [...state.cart, { ...action.payload, qty: 1 }]
            break;
        case REMOVE_FROM_CART:
            newCart = state.cart.filter(product => product.id !== action.payload)
            break;
        case INCREMENT_PRODUCT:
            newCart = state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty + 1 } : product)
            break;
        case DECREMENT_PRODUCT:
            newCart = state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty - 1 } : product)
            break;
        case EMPTY_CART:
            newCart = []
            break;
        case CHECKOUT:
            newCart = []
            checkout = true
            break;
        default:
            newCart = state.cart
    }
    return {
        ...state,
        cart: newCart,
        cartCounter: newCart.reduce((total, product) => total + product.qty, 0),
        total: newCart.reduce((total, product) => total + (product.qty * product.price), 0),
        checkout
    }
}
export default cartReducer;