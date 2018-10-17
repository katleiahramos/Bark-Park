import React from "react";
import { Row } from "react-materialize";
import Park from "./Park";

const Parks = ({ deletePark, editPark, parks, checkIn, fetchCurrentUsers}) => {
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
          fetchCurrentUsers={fetchCurrentUsers}/>
      );
    });
  };

  return (
    <div className="Parks">
      <Row>
        {renderParks()} 
      
      </Row>

      
    </div>
  );


}

export default Parks;
