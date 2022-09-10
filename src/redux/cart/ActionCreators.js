import { ADD_TO_CART, CHECKOUT, DECREMENT_PRODUCT, EMPTY_CART, INCREMENT_PRODUCT, REMOVE_FROM_CART } from "./ActionTypes";

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}
export function increment(id) {
    return {
        type: INCREMENT_PRODUCT,
        payload: id
    }
}
export function decrement(id) {
    return {
        type: DECREMENT_PRODUCT,
        payload: id
    }
}
export function emptyCart() {
    return {
        type: EMPTY_CART
    }
}
export function checkOut() {
    return {
        type: CHECKOUT
    }
}