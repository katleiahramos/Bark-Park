import React from 'react';
import { Navbar, NavItem, Modal, Row, Col, Button} from "react-materialize";
import ParkForm from './ParkForm'


const Nav = ({ addPark, handleLogOut}) => {

    return (
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
      <ParkForm addPark={addPark} />
    </Modal>

  <NavItem onClick={handleLogOut}>Log Out</NavItem>


  </Navbar>
  )
}

export default Nav