import React, { Component } from 'react';

import { Row, Input, Button } from 'react-materialize'

class ParkForm extends Component {


  render(){
    return (
    <Row>
      <Input s={6} type='text' label='Park Name' />
      <Input s={6} type='text' label ='Address' />
      <Button type="submit">Create</Button>
    </Row>
    )
  }
}

export default ParkForm
