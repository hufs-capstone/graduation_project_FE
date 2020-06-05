import React,{useState} from 'react';
import { Table } from 'reactstrap';
import { Row, Col,  Button } from 'reactstrap';
import { FormGroup,  Input, Label } from 'reactstrap';
import { Form } from 'reactstrap';

type ProductRowProps = {
    name: string;
    company_name: string;

}

function ProductRow(
    {
        name,
        company_name
    }: ProductRowProps){

        return (
            <tr>
                <th>{name}</th>
                <th>{company_name}</th>
            </tr>
        )
}

export default ProductRow;