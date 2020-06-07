import React,{useState} from 'react';
import {ProductState} from '../modules/types';

type ProductRowProps = {
    product: ProductState;
    setProduct: (product:ProductState)=>void;
}

function ProductRow(
    {
        product,
        setProduct
    }: ProductRowProps){

        return (
            <tr onClick={()=>{console.log(product);setProduct(product)}}>
                <th>{product.name}</th>
                <th>{product.company}</th>
            </tr>
        )
}

export default ProductRow;