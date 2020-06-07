import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import CompareView from '../components/CompareView';

function CompareViewContainer() {
    const age = useSelector((state: RootState)=>state.agesex.age);
    const sex = useSelector((state: RootState)=>state.agesex.sex);
    const product1 = useSelector((state: RootState)=>state.product.product1)
    const product2 = useSelector((state: RootState)=>state.product.product2)

    return (
        <CompareView
            age={age}
            sex={sex}
            product1={product1}
            product2={product2}
        />
    )
}

export default CompareViewContainer;