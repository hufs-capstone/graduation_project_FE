import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {setproduct2} from '../modules/product';
import {ProductState} from '../modules/types';
import ProductTable from '../components/ProductTable';

function ProductTableContainer2(){
    const dispatch = useDispatch();
    const setProduct2 = (product :ProductState)=>{
        dispatch(setproduct2(product));
    };

    return(
        <ProductTable
            setProduct={setProduct2}
        />
    );
}

export default ProductTableContainer2;