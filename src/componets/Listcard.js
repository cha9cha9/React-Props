import React from 'react'
import{Card,Button}from 'react-bootstrap'
function Listcard(props) {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img}/>
        <Card.Body>
          <Card.Title>{props.city}</Card.Title>
          <Card.Text>
         {props.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </div>
    )
}

export default Listcard
