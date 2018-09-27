import React, { Component } from 'react';
import {Row} from 'react-materialize';
import Park from './Park';

class Parks extends Component {


  renderParks = () => {
    return this.props.parks.map( (park, idx) => {
      // park => {name: "Wriggly Field Dog Friendly Area", address: "2645 N Sheffield Ave, Chicago, IL 60614", id: "cjmkvc3xu00023b5t4t1z4aq1", count: 1}
      return <Park parkInfo={park} key={idx} />
    })
  }

  render(){
    return(
      <div className="Parks">
        <Row>
        {this.renderParks()}
        </Row>
      </div>
    )
  }
}

export default Parks
