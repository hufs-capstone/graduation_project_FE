import React from 'react';
import { Alert } from 'reactstrap';
import CompareViewContainer from '../containers/CompareViewContainer';
import ProductTableContiner1 from '../containers/ProductTableContainer1';
import ProductTableContiner2 from '../containers/ProductTableContainer2';
import { Container, Row, Col } from 'reactstrap';

function CompareView({}){
    return (
        <div>
            <CompareViewContainer/>
            <Alert color="primary">
            상품 정보는 각 제조사에서 제공하는 그람수를 기준으로 표기하고 있으니 참고 바랍니다.
            </Alert>
            <Container>
                <Row xs="1" md="2">
                    <Col>
                        <ProductTableContiner1/>
                    </Col>
                    <Col>
                        <ProductTableContiner2/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default CompareView;