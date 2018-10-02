import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { fetchParks, postPark, deletePark} from './actions/parkActions'
import { Navbar, NavItem, Icon, Modal, SideNav, SideNavItem, Button, Collapsible, CollapsibleItem } from "react-materialize";

import ParksContainer from "./containers/ParksContainer";
import ParkForm from "./components/ParkForm";
import MapContainer from "./containers/MapContainer"


// TODO: NavBar, logo only correct aligned when using left



class App extends Component {

  editPark = parkId => {
    const parkToEdit = this.props.parks.find(park => park.id === parkId);
    this.props.editingPark(parkToEdit)
  };

  updatePark = parkEdited => {
    this.props.updatePark(parkEdited)
    // can I somehow get the modal to close here
  }

  checkIn = parkId => {
    this.props.checkIn(parkId)
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

    return (
      <div className="App ">
        <Router>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/about" component={About} />
        </Router>

        <Navbar brand="Bark Park" right fluid>
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

          

        </Navbar>

        

        {modalForm}

        <ParksContainer
          deletePark={this.props.deletePark}
          editPark={this.editPark}
          parks={this.props.parks}
          checkIn={this.checkIn}
        />

        {/* <MapContainer /> */}



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
    // addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
    addPark: (park)=> dispatch(postPark(park)),
    deletePark: parkId => dispatch(deletePark(parkId)),
    editingPark: (park) => dispatch({type: "EDITING_PARK", payload: park}),
    updatePark: (parkEdited) => dispatch({type: "UPDATE_PARK", parkEdited: parkEdited}),
    checkIn: (parkId) => dispatch({type: "CHECK_IN", parkId}), 
    fetchParks: ()=>{dispatch(fetchParks())},
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


{/* <SideNav
options={{ closeOnClick: true }}
trigger={<NavItem><Button>Your Parks</Button></NavItem>}
className=""
>
<SideNavItem userView 
  user={{
    background: '/grassbackground_small.jpg',
    image: '/barkparkicon.jpg',
    name: 'John Doe',
    email: 'jdandturk@gmail.com'
  }}
/>



<SideNavItem href='/'>Home</SideNavItem>
<SideNavItem href='/about'>About BarkPark</SideNavItem>

<SideNavItem divider />
<Collapsible>
  <CollapsibleItem header="Add New Park" icon="add_circle_outline">
    <ParkForm addPark={this.props.addPark} />
  </CollapsibleItem>
</Collapsible>


<SideNavItem divider />
<SideNavItem subheader>Saved Parks</SideNavItem>

</SideNav> */}