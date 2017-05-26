import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';


import  Main  from './components/Main';
import  LP  from './components/LeftPanel';

class App extends Component {
  
  render() {
    return (
      <Container fluid={true}>
    
        <div className="present">
          <Row>
            <Col className="left" xs="2" sm="2"><LP /></Col>
            <Col className="right" xs="10" sm={{ size: 8, offset: 1 }}>
              <Main></Main>
            </Col>
          </Row>
        </div>

      </Container>
    );
  }
}

export default App;
