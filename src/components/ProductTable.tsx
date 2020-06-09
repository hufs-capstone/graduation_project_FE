import React,{useState} from 'react';
import { Table } from 'reactstrap';
import { Row, Col,  Button } from 'reactstrap';
import { FormGroup,  Input, Label } from 'reactstrap';
import { Form } from 'reactstrap';
import ProductRow from './ProductRow';
import {post, get} from '../fetch';
import {ProductState} from '../modules/types';
import { Alert } from 'reactstrap';

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
        var [productsState, set_productState] = useState([]);

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
            <Table hover >
                <thead>
                    <tr>
                        <th>제품 이름</th>
                        <th>회사</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        productsState.map((c:ProductState)=>{
                            return <ProductRow product={c} setProduct={setProduct}/>
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
            <Alert color="white"/>
        </div>
    );
}

export default ProductTable;