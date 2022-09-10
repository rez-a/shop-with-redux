import { FETCH_PRODUCTS_FAILUR, FETCH_PRODUCTS_REQUESTS, FETCH_PRODUCTS_SUCCESS } from "./ActionTypes"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUESTS:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILUR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                products: []
            }
        default:
            return state
    }
}

export default productsReducer;