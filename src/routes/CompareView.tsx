import React from 'react';
import CompareViewContainer from '../containers/CompareViewContainer';
import ProductTableContiner1 from '../containers/ProductTableContainer1';
import ProductTableContiner2 from '../containers/ProductTableContainer2';
import { Container, Row, Col } from 'reactstrap';
function CompareView({}){
    return (
        <div>
            <CompareViewContainer/>
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