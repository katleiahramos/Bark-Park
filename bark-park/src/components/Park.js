import { Card, Col, Button } from "react-materialize";
import React from "react";

const Park = ({ parkInfo, deletePark }) => {
  // parkInfo =>  {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}
  const handleOnClick = () => {
    // want callback props here to open modal park object (parkInfo)

  };

  const handleDeleteClick = () => {
    deletePark(parkInfo.id)
  }

  return (
    <Col s={3}>
      <Card onClick={handleOnClick} title={parkInfo.name}>
        <p>Address: {parkInfo.address}</p>
        <p>Count: {parkInfo.count}</p>
        <Button onClick={handleDeleteClick} waves="light">
          Delete Park
        </Button>
      </Card>
    </Col>
  );
};

export default Park;
