import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import ManualCalculator from '../components/ManualCalculator';

function ManualCalculatorContainer() {
    const age = useSelector((state: RootState)=>state.agesex.age);
    const sex = useSelector((state: RootState)=>state.agesex.sex);

    return (
        <ManualCalculator
            age={age}
            sex={sex}
            />
    );
}
export default ManualCalculatorContainer;