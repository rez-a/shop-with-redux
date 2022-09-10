import getProducts from '../../services/getProductsApi';
import { FETCH_PRODUCTS_FAILUR, FETCH_PRODUCTS_REQUESTS, FETCH_PRODUCTS_SUCCESS } from './ActionTypes';


const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUESTS
    }
}
const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}
const fetchProductsFailur = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILUR,
        payload: error
    }
}

const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
            const response = await getProducts();
            if (response.status === 200) {
                dispatch(fetchProductsSuccess(response.data))
            } else {
                throw Error();
            }

        } catch (error) {
            dispatch(fetchProductsFailur(error.message))
        }

    }
}

export default fetchProducts;