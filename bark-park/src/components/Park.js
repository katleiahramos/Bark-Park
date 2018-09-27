import { Card, Col } from 'react-materialize'
import React from 'react'

const Park = ({parkInfo}) => {
  return (
    <Col s={3}>
      <Card title={parkInfo.name}>
        <p>Address: {parkInfo.address}</p>
        <p>Count: {parkInfo.count}</p>
      </Card>
    </Col>)
}

export default Park
