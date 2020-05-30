import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AgeContainers from './containers/AgeContainer';
import AppNavBar from './components/navbar';
import AgeSexContainer from './containers/AgeSexContainer';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <AgeContainers/>
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
              
              {/*
              <Route path = "/cal1" component={cal1}/>
              <Route path = "/cal2" component={cal2}/>
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
