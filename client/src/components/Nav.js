import React from "react";
import { Navbar, NavItem, Modal } from "react-materialize";
import ParkForm from "./ParkForm";

const Nav = ({ addPark, handleLogOut }) => {
  return (
    <Navbar className="teal" brand="Bark Park" left>
      <NavItem onClick={handleLogOut}>Log Out</NavItem>
      <Modal
        id="add-park-form"
        header="Add Park"
        trigger={
          <NavItem href="#!icon" icon="add_circle">
            Add Park
          </NavItem>
        }
      >
        <ParkForm addPark={addPark} />
      </Modal>
    </Navbar>
  );
};

export default Nav;
