import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {setage, setsex} from '../modules/agesex';
import AgeSex from '../components/AgeSex';


function AgeSexContainer(){
    const age = useSelector((state: RootState)=> state.agesex.age);
    const sex = useSelector((state: RootState)=> state.agesex.sex);
    const dispatch = useDispatch();
    const setAge = (age: number) => {
        dispatch(setage(age));
    };
    const setSex = (sex: string) => {
        dispatch(setsex(sex));
    };
    return (
        <AgeSex
            age={age}
            sex={sex}
            setAge={setAge}
            setSex={setSex}
        />
    );
}
export default AgeSexContainer;