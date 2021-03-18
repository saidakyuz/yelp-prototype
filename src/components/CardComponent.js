import React from 'react';
import mockdata from '../mock-data.json';
import {Card, Button} from "react-bootstrap";



const CardComponent = () => {
console.log(mockdata);
  return (
    <div>
    {mockdata.map(res => {
      return(
        <div key={res.id}>
        <Card>
          <Card.Header>{res.restaurant_name}</Card.Header>
          <Card.Body>
            <Card.Title>{res.rating_points}</Card.Title>
            <Card.Text>
              {res.address}
            </Card.Text>
            <Button variant="primary">More Details</Button>
          </Card.Body>
        </Card>
        </div>
      )
    })}
</div>
  )
}

export default CardComponent
