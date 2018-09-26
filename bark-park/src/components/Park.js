import { Card, Col } from 'react-materialize'
import React from 'react'

const Park = ({parkInfo}) => {
  return (
    <Col s={3}>
      <Card title={parkInfo.name}>
        Count: {parkInfo.count}
      </Card>
    </Col>)
}

export default Park
