import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {setproduct1} from '../modules/product';
import {ProductState} from '../modules/types';
import ProductTable from '../components/ProductTable';

function ProductTableContainer1(){
    const dispatch = useDispatch();
    const setProduct1 = (product :ProductState)=>{
        dispatch(setproduct1(product));
    };

    return(
        <ProductTable
            setProduct={setProduct1}
        />
    );
}

export default ProductTableContainer1;