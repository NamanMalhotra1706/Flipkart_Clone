import * as actionType from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`http://localhost:8080/product/${id}`);

        dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling cart API: ',error.message);
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionType.REMOVE_FROM_CART,
        payload: id
    })

};