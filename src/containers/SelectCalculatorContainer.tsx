import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import SelectCalculator from '../components/SelectCalculator';
import product from '../modules/product';

function SelectCalculatorContainer() {
    const age = useSelector((state: RootState)=>state.agesex.age);
    const sex = useSelector((state: RootState)=>state.agesex.sex);
    const product = useSelector((state: RootState)=>state.product.product1);

    return (
        <SelectCalculator
            product={product}
            age={age}
            sex={sex}
            />
    );
}
export default SelectCalculatorContainer;