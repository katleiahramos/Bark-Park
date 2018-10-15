import { Card, Col, Button, Modal, Dropdown, Chip, Icon ,NavItem} from "react-materialize";
import React, { Component } from "react";
import { checkIn } from '../actions/parkActions'
import { connect } from "react-redux"
class Park extends Component {
  state = {
    currentUsers: [],
  }
  componentDidMount(){
    
    this.props.fetchCurrentUsers(this.props.parkInfo.id)
      .then( users => this.setState({
        currentUsers: users 
      }))
  }

  renderCurrentUsers = () => {
    console.log("rendering current users");
    
    return (
      this.state.currentUsers.map( (user, idx) => {
        
        return (
          <Chip key={idx} >{user}</Chip>
        )
      })
    )
  }

  handleCheckIn = () => {
    this.props.checkIn(this.props.parkInfo)
    .then(()=>{
      this.props.fetchCurrentUsers(this.props.parkInfo.id)
      .then( users => this.setState({
        currentUsers: users 
      }))
    })

  }

 

  render(){
    console.log("in Park.js render");
    
    return (
      <Col s={6}>
        <Card title={this.props.parkInfo.name} className="teal lighten-5">
          <p id={this.props.parkInfo.count}>Count: {this.state.currentUsers.length}</p>
  
          <Dropdown trigger={<Button icon="more_horiz" />}>
            <Modal
              trigger={<NavItem waves="light">Info</NavItem>}
              header={this.props.parkInfo.name}
              s={6}
            >
              <h5>Address: {this.props.parkInfo.address}</h5>
              <h5>Count: {this.state.currentUsers.length}</h5>
              {this.renderCurrentUsers()}
            </Modal>
            <NavItem 
              // floating
              onClick={() => this.props.deletePark(this.props.parkInfo.id)}
              waves="light"
              // icon="delete"
            >Delete</NavItem>

            <NavItem
              // floating
              onClick={() => this.props.editPark(this.props.parkInfo.id)}
              waves="light"
              // icon="edit"
            >Edit</NavItem>
          </Dropdown>
          <Button 
            // icon="check_circle_outline"
            onClick={this.handleCheckIn}
          >Check In<Icon left>check_circle_outline</Icon></Button>
        </Card>
      </Col>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {checkIn: (park)=>dispatch(checkIn(park))}
}

export default connect(null, mapDispatchToProps)(Park);

// const Park = ({ parkInfo, deletePark, editPark, checkIn, fetchCurrentUsers }) => {
//   // parkInfo =>  {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}




//   // TODO: menu should be a circle menu button user clicks on and then all options populate around button
//   return (
//     <Col s={6}>
//       <Card title={parkInfo.name} className="teal lighten-5">
//         <p><Button icon="nature_people" floating />Count: {parkInfo.count}</p>

//         <Dropdown trigger={<Button floating icon="more_horiz" />}>
//           <Modal
//             trigger={<Button floating icon="info_outline" waves="light" />}
//             header={parkInfo.name}
//             s={6}
//           >
//             <h5>Address: {parkInfo.address}</h5>
//             <h5>Count: {parkInfo.count}</h5>
//           </Modal>
//           <Button
//             floating
//             onClick={() => deletePark(parkInfo.id)}
//             waves="light"
//             icon="delete"
//           />
//           <Button
//             floating
//             onClick={() => editPark(parkInfo.id)}
//             waves="light"
//             icon="edit"
//           />
//         </Dropdown>
//         <Button
//           floating
//           icon="check_circle_outline"
//           onClick={() => checkIn(parkInfo)}
//         />
//       </Card>
//     </Col>
//   );
// };


