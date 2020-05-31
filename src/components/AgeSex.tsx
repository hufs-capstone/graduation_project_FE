
import React  from 'react';
import { Row, Col,  Button } from 'reactstrap';
import { FormGroup,  Input } from 'reactstrap';
import { Form } from 'reactstrap';

type AgeSexProps = {
    age: number;
    sex: string;
    setAge: (age:number) =>void;
    setSex: (sex:string) =>void;
}

function AgeSex({
    age,
    sex,
    setAge,
    setSex
}: AgeSexProps){
    const onChangeAge = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setAge(Number(e.target.value));
    }
    const onChangeSex = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setSex((e.target.value));
    }
    return (
        <div>
            <h1>age: {age}</h1>
            <h1>sex: {sex}</h1>
        <Form>
            <Row form>
                <Col>
                <FormGroup>
                    <Input type="select" name ="selectAge" id="Age" onChange={onChangeAge}>
                        <option>연령대 선택</option>
                        <option value={0}>0-5 개월</option>
                        <option value={1}>6-11 개월</option>
                        <option value={2}>1-2 세</option>
                        <option value={3}>3-5 세</option>
                        <option value={4}>6-8 세</option>
                        <option value={5}>9-11 세</option>
                        <option value={6}>12-14 세</option>
                        <option value={7}>15-18 세</option>
                        <option value={8}>19-29 세</option>
                        <option value={9}>30-49 세</option>
                        <option value={10}>50-64 세</option>
                        <option value={11}>65-74 세</option>
                        <option value={12}>75세 이상</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Input type="select" name ="selectSex" id="Sex" onChange={onChangeSex}>
                        <option value={-1}>성별 선택</option>
                        <option value={'female'}>여성</option>
                        <option value={'male'}>남성</option>
                    </Input>
                </FormGroup>
                </Col>
                <Col>
                    <Button outline color="primary">입력</Button>
                </Col>
            </Row>
        </Form>
        </div>
    );
}

export default AgeSex;