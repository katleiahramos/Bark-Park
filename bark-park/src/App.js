import React, { Component } from 'react';
import './App.css';

import './bootstrap-reboot.css';
import {
  Navbar,
  NavItem,
  Col,
  Card,
  Row,
  Icon,
  Modal
} from 'react-materialize';




import ParksContainer from './containers/ParksContainer'
import ParkForm from './components/ParkForm'

// TODO: NavBar, logo only correct aligned when using left


class App extends Component {
  constructor(props) {
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

  handleAddPark = (parkInfo) => {
    this.setState({
      parks: this.state.parks.concat(parkInfo)
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar brand='Bark Park' left>
          <Modal
          header='Add Park'
          trigger={
            <NavItem>
              <Icon large>add_circle_outline</Icon>
            </NavItem>
          }>
            <ParkForm addPark={this.handleAddPark}/>
          </Modal>

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
