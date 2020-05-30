import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { setage } from '../modules/age';
import Age from '../components/Age';

function AgeContainer() {
    const age = useSelector((state: RootState) => state.age.age);
    const dispatch = useDispatch();

    const setAge = (age:number)=> {
        dispatch(setage(age));
    };
    return (
        <Age 
            age={age}
            setAge={setAge}
        />
    );
}

export default AgeContainer;