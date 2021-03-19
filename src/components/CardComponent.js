import React from 'react';
import mockdata from '../mock-data.json';
import {Card, Button} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import '../App.css'


const CardComponent = () => {
  return (
    <div>
    {mockdata.map(res => {
      return(
        <div key={res.id}>
        <Card>
          <Card.Header>{res.restaurant_name}</Card.Header>
          <Card.Body>
            <Card.Title>
              <ReactStars {...{
                size: 30,
                value: res.rating_points,
                edit: false
              }}/>
              </Card.Title>
            <Card.Text>
              {res.address}
            </Card.Text>
            <Button className="float-right" variant="primary">More Details</Button>
          </Card.Body>
        </Card>
        </div>
      )
    })}
</div>
  )
}

export default CardComponent
