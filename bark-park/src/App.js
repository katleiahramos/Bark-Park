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

  // editPark = (parkId) => {
  //   const parkToEdit = this.props.parks.find( park => park.id === parkId)
  //   return null 
  // }




  render() {
    return (
      <div className="App">

        <Navbar brand='Bark Park' left>
    
          <Modal
            header='Add Park'
            trigger={<NavItem><Icon large>add_circle_outline</Icon></NavItem>}
          >
            <ParkForm
              addPark={this.props.addPark} />
          </Modal>

        </Navbar>

        <ParksContainer
          deletePark={this.props.deletePark}
          editPark={this.editPark}
          parks={this.props.parks} />


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {parks: state.parkReducer.parks}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPark: (park) => dispatch({type: 'ADD_PARK', payload: park}),
    deletePark: (parkId) => dispatch({type: 'DELETE_PARK', parkId: parkId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);


