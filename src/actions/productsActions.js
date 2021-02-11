import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';

//Create new product
export function newProductAction(product){
    return (dispatch) => {
        dispatch(addProduct());

        try {
            dispatch( addProductSuccess(product) );
        } catch (error) {
            dispatch ( addProductError(true) );
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

//if the product is saved successfully in the db
const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});
//if there was an error while the product was being saved in the db
const addProductError = errorState => ({
    type: ADD_PRODUCT_ERROR,
    payload: errorState
});