import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchParks, createPark, deletePark, updatePark, handleModalClose, fetchCurrentUsers} from './actions/parkActions'
import { Modal, Row, Col, Button} from "react-materialize";
import {Redirect } from 'react-router-dom';

import {logoutUser} from './actions/userActions'

import ParksContainer from "./containers/ParksContainer";
import ParkForm from "./components/ParkForm";
import MapContainer from "./containers/MapContainer";
import Nav from './components/Nav';

// TODO: NavBar, logo only correct aligned when using left



class App extends Component {


  // TODO: refactor code below 
  editPark = parkId => {
    const parkToEdit = this.props.parks.find(park => park.id === parkId);
    this.props.editingPark(parkToEdit)
  };



  // checkIn = park => {
  //   this.props.checkIn(park)
  //   .then(()=>{
  //     this.setState({
        
  //     })
  //   })

    
  // }

  handleLogOut = () => {
    this.props.logoutUser()
    this.setState({
      
    })
 
  }

  componentDidMount(){
    // this.props.fetchParks();
  }

  
  



  render() {

    const modalForm = (this.props.parkToEdit ? 
      <Modal 
        id="edit-park-form" 
        actions={
          <Button 
            modal="close"
            onClick={this.props.handleModalClose}>Close</Button>
        }
        open>
        <ParkForm 
          updatePark={this.props.updatePark} 
          name={this.props.parkToEdit.name} 
          address={this.props.parkToEdit.address}
          oldPark={this.props.parkToEdit} />
      </Modal>
      : null
    )

    if ( localStorage.getItem("jwtToken") !== "undefined" && localStorage.getItem("jwtToken") !== null ) {
      // logged-in
      return (
        <div className="App ">

          <Nav addPark={this.props.addPark} handleLogOut={this.handleLogOut}/>

          {modalForm}

          <Row>
            <Col s={6}> 
              <ParksContainer
                deletePark={this.props.deletePark}
                editPark={this.editPark}
                parks={this.props.parks}
                checkIn={this.checkIn}
                fetchParks={this.props.fetchParks}
                fetchCurrentUsers={this.props.fetchCurrentUsers}
              />
            </Col>
  
  
          <Col s={6}>
            <MapContainer s={6} parks={this.props.parks} />
          </Col>
        </Row> 
  
  
        </div>
      );
    } else {
       return <Redirect to="/" />
    }
    
  }
}

const mapStateToProps = state => {
  return { 
    parks: state.parkReducer.parks, 
    editing: state.parkReducer.editingParks, 
    parkToEdit: state.parkReducer.parkToEdit,
    loggedIn: state.userReducer.loggedIn,
    currentUser: state.userReducer.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
    addPark: (park)=> dispatch(createPark(park)),
    deletePark: parkId => dispatch(deletePark(parkId)),
    editingPark: (park) => dispatch({type: "EDITING_PARK", payload: park}),
    updatePark: (parkEdited) => dispatch(updatePark(parkEdited)),
    // checkIn: (park) => dispatch(checkIn(park)), 
    handleModalClose: ()=>dispatch({type: "CLOSE_MODAL"}),
    fetchParks: ()=>dispatch(fetchParks()),
    logoutUser: ()=>logoutUser(),
    fetchCurrentUsers: (parkId)=>dispatch(fetchCurrentUsers(parkId))
  };
}; 



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

