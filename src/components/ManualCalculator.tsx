import React,{useState} from 'react';
import { Table } from 'reactstrap';
import { Button} from 'reactstrap';
import {post, get} from '../fetch';
type ManualCalculatorProps = {
    age: number;
    sex: string;
}

function ManualCalculator (
    {
        age,
        sex
    }: ManualCalculatorProps){
        var [state, set_state] = useState({
            kcal : 0,
            carbs : 0,
            protein : 0,
            fat : 0,
            na : 0,
            chol : 0,
            sugar : 0,
            kcal2 : 0,
            carbs2 : 0,
            protein2 : 0,
            fat2 : 0,
            na2 : 0,
            chol2 : 0,
            sugar2 : 0
        });
        const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            var name = e.target.name;
            var value = e.target.value;
            set_state({...state, [name]: value});
        }
        const handleClick=(e :any)=>{
            console.log(age);
            console.log(sex);
            var params = {
                'sex' : String(sex),
                'age' : String(age),
                'kcal' : state.kcal,
                'carbs' : state.carbs,
                'protein' : state.protein,
                'fat' : state.fat,
                'na' : state.na,
                'chol' : state.chol,
                'sugar' : state.sugar,
            };
            const res = post(params,'manualtranslate' )
            res.then((data:any)=>{
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
        <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>제품명 : </th>
                <th>변환 전</th>
                <th>변환 후</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>칼로리</td>
                <td><input type="number" placeholder="칼로리 입력" name="kcal" onChange={handleChange}/></td>
                <td>{state.kcal2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>탄수화물</td>
                <td><input type="number" placeholder="탄수화물 입력" name="carbs" onChange={handleChange}/></td>
                <td>{state.carbs2}  </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>단백질</td>
                <td><input type="number" placeholder="단백질 입력" name="protein" onChange={handleChange}/></td>
                <td>{state.protein2} </td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>지방</td>
                <td><input type="number" placeholder="지방 입력" name="fat" onChange={handleChange}/></td>
                <td>{state.fat2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>나트륨</td>
                <td><input type="number" placeholder="나트륨 입력" name="na" onChange={handleChange}/></td>
                <td>{state.na2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>콜레스테롤</td>
                <td><input type="number" placeholder="콜레스테롤 입력" name="chol" onChange={handleChange}/></td>
                <td>{state.chol2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>당류</td>
                <td><input type="number" placeholder="당류 입력" name="sugar" onChange={handleChange}/></td>
                <td>{state.sugar2}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td> </td>
                <td> </td>
                <td><Button className="btn pull-right" color="info" onClick={handleClick}>상품 정보 입력</Button></td>
              </tr>
            </tbody>
        </Table>
    );

}
export default ManualCalculator;