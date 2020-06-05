import React,{useState} from 'react';
import { Table } from 'reactstrap';
import { Button  } from 'reactstrap';
import {ProductState} from '../modules/types'
import {post, get} from '../fetch';

type SelectCalculatorState = {
    product: ProductState;
    age: number;
    sex: string;
}

function SelectCalculator(
    {
        product,
        age,
        sex
    }: SelectCalculatorState){
        var [state, set_state] = useState({
            name : product.name,
            company: product.company,
            kcal : product.kcal,
            carbs : product.carbs,
            protein : product.protein,
            fat : product.fat,
            na : product.na,
            chol : product.chol,
            sugar : product.sugar,
            kcal2 : 0,
            carbs2 : 0,
            protein2 : 0,
            fat2 : 0,
            na2 : 0,
            chol2 : 0,
            sugar2 : 0
        });
        const handleClick=(e :any)=>{
            console.log(age);
            console.log(sex);
        }
    return(
        <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>제품명 : {state.name}</th>
                <th>변환 전</th>
                <th>변환 후</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>칼로리</td>
                <td>{state.kcal}</td>
                <td>{state.kcal2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>탄수화물</td>
                <td>{state.carbs}</td>
                <td>{state.carbs2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>단백질</td>
                <td>{state.protein}</td>
                <td>{state.protein2} </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>지방</td>
                <td>{state.fat}</td>
                <td>{state.fat2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>나트륨</td>
                <td>{state.na}</td>
                <td>{state.na2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>콜레스테롤</td>
                <td>{state.chol}</td>
                <td>{state.chol2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>당류</td>
                <td>{state.sugar}</td>
                <td>{state.sugar2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td> </td>
                <td> </td>
                <td><Button className="btn pull-right" color="info" onClick={handleClick}>변환</Button></td>
              </tr>
            </tbody>
        </Table>
    )
    }

export default SelectCalculator;