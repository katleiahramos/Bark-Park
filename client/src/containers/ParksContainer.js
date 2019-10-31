import React, { Component } from "react";
import Parks from "../components/Parks";
// import { connect } from 'react-redux'

class ParksContainer extends Component {
  componentDidMount() {
    this.props.fetchParks();
  }

  render() {
    const style = {
      height: "90vh"
    };

    const {
      currentUser,
      deletePark,
      editPark,
      parks,
      fetchCurrentUsers
    } = this.props;

    return (
      <div style={style} className="Parks-container">
        <Parks
          deletePark={deletePark}
          editPark={editPark}
          parks={parks}
          // checkIn={this.props.checkIn}
          fetchCurrentUsers={fetchCurrentUsers}
        />
      </div>
    );
  }
}

// TODO: seperation of concerns for parks/store

// const mapStateToProps = (state) => {s
//   return {parks: state.parkReducer.parks}
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPark: (park) => dispatch({type: 'ADD_PARK', payload: park})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)

export default ParksContainer;
