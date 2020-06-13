import React,{useState} from 'react';
import { Table } from 'reactstrap';
import { render } from 'react-dom';
import { Button, Input, Col } from 'reactstrap';
import {ProductState} from '../modules/types'
import {post, get} from '../fetch';
import Barchart from './BarChart';

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
            console.log(product);
            var params = {
                'sex' : String(sex),
                'age' : String(age),
                'product_name' : String(product.name),
            };
            const res = post(params, 'translate')
            res.then((data:any)=> {
                const trans = data.translated.product;
                set_state({...state, 
                    kcal2: trans.kcal,
                    carbs2: trans.carbs,
                    protein2 : trans.protein,
                    fat2: trans.fat,
                    na2: trans.na,
                    chol2: trans.chol,
                    sugar2: trans.sugar
            });
        })
    }
    return(
        <div>
        <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>제품명 : {product.name}</th>
                <th>변환 전</th>
                <th>변환 후</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>칼로리</td>
                <td>{product.kcal.toFixed(2)}</td>
                <td>{state.kcal2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>탄수화물</td>
                <td>{product.carbs.toFixed(2)}</td>
                <td>{state.carbs2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>단백질</td>
                <td>{product.protein.toFixed(2)}</td>
                <td>{state.protein2} </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>지방</td>
                <td>{product.fat.toFixed(2)}</td>
                <td>{state.fat2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>나트륨</td>
                <td>{product.na.toFixed(2)}</td>
                <td>{state.na2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>콜레스테롤</td>
                <td>{product.chol.toFixed(2)}</td>
                <td>{state.chol2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>당류</td>
                <td>{product.sugar.toFixed(2)}</td>
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
        <Barchart data={state}></Barchart>
        </div>
    );
}
export default SelectCalculator;