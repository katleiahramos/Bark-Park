import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem, Col, Card, Row, Icon} from 'react-materialize';

import ParksContainer from './containers/ParksContainer'

// TODO: NavBar, logo only correct aligned when using left


class App extends Component {
  constructor(props){
    super(props);
  this.state = {
  parks: [
    {
      name: 'Wriggly Field Dog Friendly Area',
      count: '1'
    }
  ]
}
  }

  render() {
    return (
      <div className="App">
        <Navbar brand='Bark Park' left>
          <NavItem onClick={() => console.log('test click')}><Icon>add_circle_outline</Icon></NavItem>
        </Navbar>

        <ParksContainer />

        <Row>
          <Col s={3}>
            <Card title={this.state.parks[0].name}>
              Count: {this.state.parks[0].count}
            </Card>
        </Col>
      </Row>
      </div>
    );
  }
}

export default App;

// HARD CODED VERSION
// <Row>
//   <Col s={3}>
//     <Card title="Wriggly Field Dog Friendly Area">
//       Count: 1
//     </Card>
// </Col>
// <Col s={3}>
//   <Card title="Belmont Harbor Dog Beach">
//       Count: 1
//   </Card>
// </Col>
// <Col s={3}>
//   <Card title="Logan Square Dog Park">
//       Count: 1
//     </Card>
// </Col>
// </Row>
