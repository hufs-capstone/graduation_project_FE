import React,{useState} from 'react';
import { Table } from 'reactstrap';
import { Row, Col,  Button } from 'reactstrap';
import { FormGroup,  Input, Label } from 'reactstrap';
import { Form } from 'reactstrap';
import ProductRow from './ProductRow';
import {post, get} from '../fetch';
import {ProductState} from '../modules/types';

type ProductTableProps = {
    setProduct: (product: ProductState) => void;
}
function ProductTable(
    { 
        setProduct
    }
    : ProductTableProps) {
        var [searchState, set_searchState] = useState("");
        var [startItemState, set_pageState] = useState(1);
        var [productsState, set_productState] = useState([{name:"제품명", company:"회사명"}]
        );

        const onClickSearch = ( )=> {
            console.log(searchState);
            var params = {
                'num' : String(startItemState),
                'query': searchState
            }
            const res = post(params, 'searchproduct')
            res.then((data:any)=>{
                set_productState(
                    data.products
                )
            })
        };
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>제품 이름</th>
                        <th>회사</th>
                    </tr>
                </thead>
                <tbody>
                    { 

                        productsState.map((c:any)=>{
                            return <ProductRow name={c.name} company_name={c.company}/>
                        })
                    }

                </tbody>
            </Table>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="product" id="search" placeholder="Product Name" value={searchState} onChange={(e) => { set_searchState(e.target.value) }} />
                </FormGroup>
                <Button onClick={onClickSearch}>Search</Button>
            </Form>
            <Button onClick={()=>{console.log(productsState)}}> check</Button>
        </div>
    );
}

export default ProductTable;