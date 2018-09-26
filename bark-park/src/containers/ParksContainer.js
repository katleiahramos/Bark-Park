import React, { Component } from 'react'
import Parks from '../components/Parks'

class ParksContainer extends Component {

  render(){
    return(
      <div>
        <Parks parks={this.props.parks} />
      </div>
    )
  }
}


export default ParksContainer
