import React from "react";
import { Row } from "react-materialize";
import Park from "./Park";

const Parks = ({
  currentUser,
  deletePark,
  editPark,
  parks,
  checkIn,
  fetchCurrentUsers
}) => {
  const renderParks = () => {
    return parks.map((park, idx) => {
      // park => {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}
      return (
        <Park
          deletePark={deletePark}
          editPark={editPark}
          parkInfo={park}
          key={idx}
          // checkIn={checkIn}
          fetchCurrentUsers={fetchCurrentUsers}
        />
      );
    });
  };

  const style = {
    heigth: "100%"
  };

  const rowStyle = {
    marginBottom: "0"
  };

  return (
    <div className="Parks" style={style}>
      <Row style={rowStyle}>{renderParks()}</Row>
    </div>
  );
};

export default Parks;
