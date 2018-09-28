import React, { Component } from "react";
import { connect } from "react-redux";
// import { Route } from 'react-router-dom'
import "./App.css";

import "./bootstrap-reboot.css";
import { Navbar, NavItem, Icon, Modal, SideNav, SideNavItem, Button, Collapsible, CollapsibleItem } from "react-materialize";

import ParksContainer from "./containers/ParksContainer";
import ParkForm from "./components/ParkForm";


// TODO: NavBar, logo only correct aligned when using left



class App extends Component {

  editPark = parkId => {
    const parkToEdit = this.props.parks.find(park => park.id === parkId);
    this.props.editingPark(parkToEdit)
  };

  //TODO: Modal opens, but we need to add logic so the form puplates with existing information 

  render() {

    const modalForm = (this.props.parkToEdit ? 
      <Modal open>
        <ParkForm 
          updatePark={this.props.updatePark} 
          name={this.props.parkToEdit.name} 
          address={this.props.parkToEdit.address}/>
        </Modal> 
      : null
    )

    return (
      <div className="App ">
        <SideNav
          options={{ closeOnClick: false }}
          className=""
          fixed 
        >
          <SideNavItem userView 
            user={{
              background: '/grassbackground_small.jpg',
              image: '/barkparkicon.jpg',
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
          />

            <Collapsible>
              <CollapsibleItem header="Add New Park" icon="add_circle_outline">
              <ParkForm addPark={this.props.addPark} />
              </CollapsibleItem>
            </Collapsible>

          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
        </SideNav>



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
    editing: state.parkReducer.editingParks, 
    parkToEdit: state.parkReducer.parkToEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
    deletePark: parkId => dispatch({ type: "DELETE_PARK", parkId: parkId }),
    editingPark: (park) => dispatch({type: "EDITING_PARK", payload: park}),
    updatePark: () => dispatch({type: "UPDATE_PARK"})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


{/* <Modal
header="Add Park"
trigger={
  <SideNavItem 
    href='#!icon' 
    icon='add_circle_outline'>
      Add New Park
  </SideNavItem>
}
>
<ParkForm addPark={this.props.addPark} />
</Modal> */}