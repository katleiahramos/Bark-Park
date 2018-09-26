import React, { Component } from 'react';
import {Row} from 'react-materialize';
import Park from './Park';

class Parks extends Component {

  renderParks = () => {
    return this.props.parks.map( (park, idx) => {
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
