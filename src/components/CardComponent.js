import React from "react";
// import mockdata from "../mock-data.json";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "../App.css";
import { Link } from "react-router-dom";

const CardComponent = ({ result }) => {
  console.log("RESULT IN CARDCOMPONENT", result);
  return (
    <div>
      {result.map((result) => {
        return (
          <div key={result.id}>
            <Card>
              <Card.Header>{result.restaurantname}</Card.Header>
              <Card.Body>
                <Card.Title>
                  <ReactStars
                    {...{
                      size: 30,
                      value: result.rating_points,
                      edit: false,
                    }}
                  />
                </Card.Title>
                <Card.Text>{result.adress}</Card.Text>
                <Button className="float-right" variant="link">
                  <Link to={`/restaurants/${result.id}`}>More Details >></Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
