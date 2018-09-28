import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from 'react-router-dom'
import "./App.css";

import "./bootstrap-reboot.css";
import { Navbar, NavItem, Icon, Modal } from "react-materialize";

import ParksContainer from "./containers/ParksContainer";
import ParkForm from "./components/ParkForm";


// TODO: NavBar, logo only correct aligned when using left



class App extends Component {

  editPark = parkId => {
    const parkToEdit = this.props.parks.find(park => park.id === parkId);
    this.props.editingPark()
  };

  //TODO: Modal opens, but we need to add logic so the form puplates with existing information 

  render() {

    const modalForm = this.props.editing ? <Modal open><ParkForm updatePark={this.props.updatePark} /></Modal>: "not editing!"; 

    return (
      <div className="App">
        <Navbar brand="Bark Park" left>
          <Modal
            header="Add Park"
            trigger={
              <NavItem>
                <Icon large>add_circle_outline</Icon>
              </NavItem>
            }
          >
            <ParkForm addPark={this.props.addPark} />
          </Modal>
        </Navbar>

        <ParksContainer
          deletePark={this.props.deletePark}
          editPark={this.editPark}
          parks={this.props.parks}
        />

        <h2>{modalForm}</h2>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    parks: state.parkReducer.parks, 
    editing: state.parkReducer.editingParks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
    deletePark: parkId => dispatch({ type: "DELETE_PARK", parkId: parkId }),
    editingPark: () => dispatch({type: "EDITING_PARK"}),
    updatePark: () => dispatch({type: "UPDATE_PARK"})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
