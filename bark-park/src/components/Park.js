import { Card, Col, Button, Modal } from "react-materialize";
import React from "react";

const Park = ({ parkInfo, deletePark }) => {
  // parkInfo =>  {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}

  const parkCard = (
    <Col s={3}>
      <Card title={parkInfo.name}>
        <p>Count: {parkInfo.count}</p>
      </Card>
    </Col>
  );

  return (
    <Modal trigger={parkCard} header={parkInfo.name}>
      <p>Address: {parkInfo.address}</p>
      <p>Count: {parkInfo.count}</p>
      <Button onClick={() => deletePark(parkInfo.id)} waves="light">
        Delete Park
      </Button>
    </Modal>
  );
};

export default Park;
