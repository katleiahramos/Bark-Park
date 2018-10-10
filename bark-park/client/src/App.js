import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { fetchParks, createPark, deletePark, updatePark, checkIn} from './actions/parkActions'
import { Navbar, NavItem, Modal, Row, Col, Button} from "react-materialize";
import {Redirect } from 'react-router-dom';

import {logoutUser} from './actions/userActions'

import ParksContainer from "./containers/ParksContainer";
import ParkForm from "./components/ParkForm";
import MapContainer from "./containers/MapContainer"


// TODO: NavBar, logo only correct aligned when using left



class App extends Component {


  // TODO: refactor code below 
  editPark = parkId => {
    const parkToEdit = this.props.parks.find(park => park.id === parkId);
    this.props.editingPark(parkToEdit)
  };

  updatePark = parkEdited => {
    this.props.updatePark(parkEdited)
    // can I somehow get the modal to close here
  }

  checkIn = park => {
    this.props.checkIn(park)
  }

  componentDidMount(){
    this.props.fetchParks();
  }

  
  



  render() {

    const modalForm = (this.props.parkToEdit ? 
      <Modal open>
        <ParkForm 
          updatePark={this.updatePark} 
          name={this.props.parkToEdit.name} 
          address={this.props.parkToEdit.address}
          oldPark={this.props.parkToEdit} />
      </Modal>
      : null
    )

    if (localStorage.getItem("jwtToken") !== "undefined") {
      // logged-in
      return (
        <div className="App ">
          <Router>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/about" component={About} />
          </Router>
  
          <Navbar brand="Bark Park" right>
          

            <Modal
              header="Add Park"
              trigger={
                <NavItem
                  href='#!icon'
                  icon="add_circle">
                  Add Park
              </NavItem>
              }
            >
              <ParkForm addPark={this.props.addPark} />
            </Modal>

          <NavItem onClick={logoutUser()} >Log Out</NavItem>

            
  
            
  
          </Navbar>
  
          
  
          {modalForm}
          <Row>
            <Col s={6}> 
            <ParksContainer
              deletePark={this.props.deletePark}
              editPark={this.editPark}
              parks={this.props.parks}
              checkIn={this.checkIn}
              
            />
            </Col>
  
  
          <Col s={6}>
          <MapContainer s={6} parks={this.props.parks} />
          </Col>
        </Row> 
  
  
        </div>
      );
    } else {
      // not logged-in 
      return <Redirect to="/login" />
    }
    
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
    // addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
    addPark: (park)=> dispatch(createPark(park)),
    deletePark: parkId => dispatch(deletePark(parkId)),
    editingPark: (park) => dispatch({type: "EDITING_PARK", payload: park}),
    updatePark: (parkEdited) => dispatch(updatePark(parkEdited)),
    checkIn: (park) => dispatch(checkIn(park)), 
    fetchParks: ()=>dispatch(fetchParks()),
  };
};

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

