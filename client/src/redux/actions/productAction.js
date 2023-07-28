import axios from "axios";
import * as actionType from '../constants/productConstant';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:8080/products`);
        dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:8080/product/${id}`);
        
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_RESET });
};

