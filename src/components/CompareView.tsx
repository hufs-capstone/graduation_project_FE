import React,{useState} from 'react';
import { Table, Button } from 'reactstrap';
import {ProductState} from '../modules/types'

type CompareViewState = {
    product1: ProductState;
    product2: ProductState;
    age: number;
    sex: string;
}

function CompareView(
    {
        product1,
        product2,
        age,
        sex
    }: CompareViewState){
    return(
        <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>제품명 </th>
                <th>{product1.name}</th>
                <th>{product2.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>칼로리</td>
                <td>{product1.kcal.toFixed(2)}</td>
                <td>{product2.kcal.toFixed(2)}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>탄수화물</td>
                <td>{product1.carbs.toFixed(2)}</td>
                <td>{product2.carbs.toFixed(2)}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>단백질</td>
                <td>{product1.protein.toFixed(2)}</td>
                <td>{product2.protein.toFixed(2)} </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>지방</td>
                <td>{product1.fat.toFixed(2)}</td>
                <td>{product2.fat.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>나트륨</td>
                <td>{product1.na.toFixed(2)}</td>
                <td>{product2.na.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>콜레스테롤</td>
                <td>{product1.chol.toFixed(2)}</td>
                <td>{product2.chol.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>당류</td>
                <td>{product1.sugar.toFixed(2)}</td>
                <td>{product2.sugar.toFixed(2)}</td>
              </tr>
            </tbody>
        </Table>
    )
    }

export default CompareView;