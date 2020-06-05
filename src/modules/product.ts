import {ProductState} from './types';
const SETPRODUCT1 = 'product/SETProduct1' as const;
const SETPRODUCT2 = 'product/SETProduct2' as const;

export const setproduct1 = (product1:ProductState) => ({type:SETPRODUCT1, payload: product1});
export const setproduct2 = (product2:ProductState) => ({type:SETPRODUCT2, payload: product2});

type ProductAction = ReturnType<typeof setproduct1>|
ReturnType<typeof setproduct2>;

type ProductsState = {
    product1: ProductState
    product2: ProductState
}
var initailProductState = {
    name: "",
    company: '',
    kcal: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    na: 0,
    chol: 0,
    sugar: 0
}

const initialState: ProductsState = {
    product1: initailProductState,
    product2: initailProductState
};

function product(state: ProductsState = initialState, action: ProductAction){
    switch(action.type) {
        case SETPRODUCT1:
            return{product1: action.payload, product2: state.product2}
        case SETPRODUCT2:
            return {product1: state.product1, product2: action.payload}
        default:
            return state
    }
}
export default product;