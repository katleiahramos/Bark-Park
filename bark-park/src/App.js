import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem, Col, Card, Row} from 'react-materialize';

// TODO: NavBar, logo only correct aligned when using left


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='Bark Park' left>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        </Navbar>
        <Row>
          <Col s={3}>
            <Card title="Wriggly Field Dog Friendly Area">
              Count: 1
            </Card>
        </Col>
        <Col s={3}>
          <Card title="Belmont Harbor Dog Beach">
              Count: 1
          </Card>
        </Col>
        <Col s={3}>
          <Card title="Logan Square Dog Park">
              Count: 1
            </Card>
        </Col>
      </Row>
      </div>
    );
  }
}

export default App;
