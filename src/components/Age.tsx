import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap'

type AgeProps = {
    age: number;
    setAge: (age:number)=>void;
}

function Age({
    age,
    setAge
}: AgeProps) {
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        setAge(Number(e.target.value));
    }
    return (
        <div>
            <h1>{age}</h1>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={onChange}>
                    <option value={30}>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
        </div>
    )
}

export default Age;