import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AppNavBar from './components/navbar';
import AgeSexContainer from './containers/AgeSexContainer';
import Home from './routes/Home';
import ManualCalculator from './routes/ManualCalculator';
import SelectCalculator from './routes/SelectCalculator';

function App() {
  return (
    <div className="App">
       <Container>
        <Row>
          <Col>
          <AppNavBar/>
          </Col>
        </Row>
      </Container>
      <Container>
        <div>
          <AgeSexContainer />
        </div>
      </Container>
      <Container>
        <Router>
          <div>
            <Switch>
              
              <Route exact path = "/" component={Home}/>
              
              <Route path = "/manualcalculator" component={ManualCalculator}/>
              
              <Route path = "/selectcalculator" component={SelectCalculator}/>
              {/*
              <Route path = "/comp" component={comp}/>
              */}

            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
