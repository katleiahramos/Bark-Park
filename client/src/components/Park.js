import { Card, Col, Button, Modal, Dropdown, NavItem } from "react-materialize";
import React, { Component } from "react";
import { checkIn, checkOut } from "../actions/parkActions";
import { connect } from "react-redux";

class Park extends Component {
  state = {
    currentUsers: []
  };
  componentDidMount() {
    this.props.fetchCurrentUsers(this.props.parkInfo.id).then(users =>
      this.setState({
        currentUsers: users
      })
    );
  }

  // renderCurrentUsers = () => {
  //   return this.state.currentUsers.map((user, idx) => {
  //     return <Chip key={idx}>{user}</Chip>;
  //   });
  // };

  handleCheckIn = () => {
    this.props.checkIn(this.props.parkInfo).then(() => {
      this.props.fetchCurrentUsers(this.props.parkInfo.id).then(users =>
        this.setState({
          currentUsers: users
        })
      );
    });
  };

  handleCheckOut = () => {
    this.props.checkOut(this.props.checkedIn).then(() => {
      this.props.fetchCurrentUsers(this.props.parkInfo.id).then(users =>
        this.setState({
          currentUsers: users
        })
      );
    });
  };

  render() {
    const currentUser = localStorage.getItem("currentUser");
    const { currentUsers } = this.state;
    if (currentUsers.includes(currentUser)) {
      return (
        <Col s={6}>
          <Card title={this.props.parkInfo.name} className="teal lighten-5">
            <p id={this.props.parkInfo.count}>
              {" "}
              <i className="fas fa-dog" /> {this.state.currentUsers.length}
            </p>
            <br />

            <Dropdown trigger={<Button icon="more_horiz" />}>
              <Modal
                trigger={<NavItem waves="light"> Info</NavItem>}
                header={this.props.parkInfo.name}
                s={6}
              >
                <h5>
                  <i className="fas fa-map-pin" /> {this.props.parkInfo.address}
                </h5>
                <h5>
                  <i className="fas fa-user-check" />{" "}
                  {this.state.currentUsers.length}
                </h5>
                {/* commenting out showing user names for now */}
                {/* {this.renderCurrentUsers()} */}
              </Modal>
              <NavItem
                // floating
                onClick={() => this.props.deletePark(this.props.parkInfo.id)}
                waves="light"
                // icon="delete"
              >
                Delete
              </NavItem>

              <NavItem
                // floating
                onClick={() => this.props.editPark(this.props.parkInfo.id)}
                waves="light"
                // icon="edit"
              >
                Edit
              </NavItem>
            </Dropdown>

            <Button onClick={this.handleCheckOut}>CHECK OUT</Button>
          </Card>
        </Col>
      );
    } else if (this.props.checkedIn) {
      return (
        <Col s={6}>
          <Card title={this.props.parkInfo.name} className="teal lighten-5">
            <p id={this.props.parkInfo.count}>
              {" "}
              <i className="fas fa-dog" /> {this.state.currentUsers.length}
            </p>
            <br />

            <Dropdown trigger={<Button icon="more_horiz" />}>
              <Modal
                trigger={<NavItem waves="light"> Info</NavItem>}
                header={this.props.parkInfo.name}
                s={6}
              >
                <h5>
                  <i className="fas fa-map-pin" /> {this.props.parkInfo.address}
                </h5>
                <h5>
                  <i className="fas fa-user-check" />{" "}
                  {this.state.currentUsers.length}
                </h5>
                {/* commenting out showing user names for now */}
                {/* {this.renderCurrentUsers()} */}
              </Modal>
              <NavItem
                // floating
                onClick={() => this.props.deletePark(this.props.parkInfo.id)}
                waves="light"
                // icon="delete"
              >
                Delete
              </NavItem>

              <NavItem
                // floating
                onClick={() => this.props.editPark(this.props.parkInfo.id)}
                waves="light"
                // icon="edit"
              >
                Edit
              </NavItem>
            </Dropdown>
          </Card>
        </Col>
      );
    } else {
      return (
        <Col s={6}>
          <Card title={this.props.parkInfo.name} className="teal lighten-5">
            <p id={this.props.parkInfo.count}>
              {" "}
              <i className="fas fa-dog" /> {this.state.currentUsers.length}
            </p>
            <br />

            <Dropdown trigger={<Button icon="more_horiz" />}>
              <Modal
                trigger={<NavItem waves="light"> Info</NavItem>}
                header={this.props.parkInfo.name}
                s={6}
              >
                <h5>
                  <i className="fas fa-map-pin" /> {this.props.parkInfo.address}
                </h5>
                <h5>
                  <i className="fas fa-user-check" />{" "}
                  {this.state.currentUsers.length}
                </h5>
                {/* commenting out showing user names for now */}
                {/* {this.renderCurrentUsers()} */}
              </Modal>
              <NavItem
                onClick={() => this.props.deletePark(this.props.parkInfo.id)}
                waves="light"
              >
                Delete
              </NavItem>

              <NavItem
                onClick={() => this.props.editPark(this.props.parkInfo.id)}
                waves="light"
              >
                Edit
              </NavItem>
            </Dropdown>

            <Button onClick={this.handleCheckIn}>
              <i className="fas fa-user-check" /> Check In
            </Button>
          </Card>
        </Col>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkIn: park => dispatch(checkIn(park)),
    checkOut: checkInData => dispatch(checkOut(checkInData))
  };
};

const mapStateToProps = state => {
  return {
    checkedIn: state.parkReducer.checkIn
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Park);

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
