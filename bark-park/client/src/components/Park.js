import { Card, Col, Button, Modal, Dropdown } from "react-materialize";
import React from "react";



const Park = ({ parkInfo, deletePark, editPark, checkIn }) => {
  // parkInfo =>  {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}



  // TODO: maybe use ROUTES here to make certain modals appear.

  // TODO: menu should be a circle menu button user clicks on and then all options populate around button
  return (
    <Col s={6}>
      <Card title={parkInfo.name} className="teal lighten-5">
        <p><Button icon="nature_people" floating />Count: {parkInfo.count}</p>

        <Dropdown trigger={<Button floating icon="more_horiz" />}>
          <Modal
            trigger={<Button floating icon="info_outline" waves="light" />}
            header={parkInfo.name}
            s={6}
          >
            <h5>Address: {parkInfo.address}</h5>
            <h5>Count: {parkInfo.count}</h5>
          </Modal>
          <Button
            floating
            onClick={() => deletePark(parkInfo.id)}
            waves="light"
            icon="delete"
          />
          <Button
            floating
            onClick={() => editPark(parkInfo.id)}
            waves="light"
            icon="edit"
          />
        </Dropdown>
        <Button
          floating
          icon="check_circle_outline"
          onClick={() => checkIn(parkInfo)}
        />
      </Card>
    </Col>
  );
};

export default Park;
