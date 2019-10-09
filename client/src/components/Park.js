import {
  Card,
  Col,
  Button,
  Modal,
  Dropdown,
  Chip,
  Icon,
  NavItem
} from "react-materialize";
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
    const { checkedIn, parkInfo } = this.props;

    return (
      <Col s={6}>
        <Card title={this.props.parkInfo.name} className="teal lighten-5">
          <p id={this.props.parkInfo.count}>
            {" "}
            <i class="fas fa-dog" /> {this.state.currentUsers.length}
          </p>
          <br />

          <Dropdown trigger={<Button icon="more_horiz" />}>
            <Modal
              trigger={<NavItem waves="light"> Info</NavItem>}
              header={this.props.parkInfo.name}
              s={6}
            >
              <h5>
                <i class="fas fa-map-pin" /> {this.props.parkInfo.address}
              </h5>
              <h5>
                <i class="fas fa-user-check" /> {this.state.currentUsers.length}
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

          {checkedIn &&
            checkedIn.park.id === parkInfo.id && (
              <Button onClick={this.handleCheckOut}>CHECK OUT</Button>
            )}

          {!checkedIn && (
            <Button onClick={this.handleCheckIn}>
              <i class="fas fa-user-check" /> Check In
            </Button>
          )}
        </Card>
      </Col>
    );
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
