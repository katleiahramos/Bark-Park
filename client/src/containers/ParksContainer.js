import React from "react";
import { useGet } from "restful-react";
import Parks from "../components/Parks";
// import { connect } from 'react-redux'
const style = {
  height: "90vh"
};

const ParksContainer = props => {
  const { error, loading, data } = useGet({ path: "/parks" });

  const { deletePark, editPark, fetchCurrentUsers } = props;

  return (
    <div style={style} className="Parks-container">
      {error && <div>An error has occured!</div>}
      {loading && <div>Loading...</div>}
      {data && (
        <Parks
          deletePark={deletePark}
          editPark={editPark}
          parks={data}
          // checkIn={this.props.checkIn}
          fetchCurrentUsers={fetchCurrentUsers}
        />
      )}
    </div>
  );
};

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
