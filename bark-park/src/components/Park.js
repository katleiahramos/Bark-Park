import { Card, Col, Button, Modal} from "react-materialize";
import React from "react";


// ////////////// Class version 

// class Park extends Component {
//   state = {
//     editing: false
//   }

//   handleEditClick = () => {
//     this.setState({
//       editing: true
//     })
//   }

//   parkCard = (
//     <Col s={3}>
//       <Card title={parkInfo.name}>
//         <p>Count: {parkInfo.count}</p>
//       </Card>
//     </Col>
//   );

//   modalContent = () => {
//     if (this.state.editing) {
//       return <ParkForm />
//     } else {
//       return (
//         <React.Fragment>
//           <h5>Address: {parkInfo.address}</h5>
//           <h5>Count: {parkInfo.count}</h5>
//           <Button onClick={() => deletePark(parkInfo.id)} waves="light">
//             <Icon>delete</Icon>
//           </Button>
//           <Button onClick={() => editPark(parkInfo.id)} waves="light">
//             <Icon>edit</Icon>
//           </Button>
//         </React.Fragment>
//       )
//     }

//   }
  

//   render(){
//     return (
    
//       <Modal trigger={this.parkCard} header={parkInfo.name}>
//         <h5>Address: {parkInfo.address}</h5>
//         <h5>Count: {parkInfo.count}</h5>
//         <Button onClick={() => deletePark(parkInfo.id)} waves="light">
//           <Icon>delete</Icon>
//         </Button>
//         <Button onClick={() => editPark(parkInfo.id)} waves="light">
//           <Icon>edit</Icon>
//         </Button>
//       </Modal>
      
//     );
//   }
// } 

// export default Park;


/////////////////// END:  CLASS ////////////////





const Park = ({ parkInfo, deletePark, editPark }) => {
  // parkInfo =>  {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}

  // const parkCard = (
  //   <Col s={3}>
  //     <Card title={parkInfo.name}>
  //       <p>Count: {parkInfo.count}</p>
  //       <Button onClick={() => deletePark(parkInfo.id)} waves="light">
  //         <Icon>delete</Icon>
  //       </Button>
  //       <Button onClick={() => editPark(parkInfo.id)} waves="light">
  //         <Icon>edit</Icon>
  //       </Button>
  //     </Card>
  //   </Col>
  // );


  // TODO: maybe use ROUTES here to make certain modals appear. 

  // TODO: menu should be a circle menu button user clicks on and then all options populate around button
  return (
      <Col s={3}>

        <Card title={parkInfo.name} className="teal lighten-5">
          <p>Count: {parkInfo.count}</p>
          <Modal
            trigger={
              <Button
                floating icon="more_horiz"
                waves="light"
              />
            }
            header={parkInfo.name}
            s={6}>
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


        </Card>
      </Col>

  );
};

export default Park;
