import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import './bootstrap-reboot.css';
import {
  Navbar,
  NavItem,
  Icon,
  Modal
} from 'react-materialize';




import ParksContainer from './containers/ParksContainer'
import ParkForm from './components/ParkForm'

// TODO: NavBar, logo only correct aligned when using left


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     parks: [
  //       {
  //         name: 'Wriggly Field Dog Friendly Area',
  //         address: '2645 N Sheffield Ave, Chicago, IL 60614',
  //         count: 1
  //       }
  //     ]
  //   }
  // }

  handleAddPark = (parkInfo) => {
    
    // this.setState({
    //   parks: this.state.parks.concat(newPark)
    // })
    this.props.addPark(parkInfo)
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

        <ParksContainer parks={this.props.parks}/>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {parks: state.parkReducer.parks}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPark: (park) => dispatch({type: 'ADD_PARK', payload: park})
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);


