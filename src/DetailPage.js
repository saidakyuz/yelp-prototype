import React from "react";
// import mockdata from "./mock-data.json";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleMap from './components/SingleMap.js'

export default function DetailPage({ result }) {
  const { id } = useParams();
  console.log("id From DETAILPAGE", id);

  const [restaurant, setRestaurant] = useState([]);
  const url = `https://protected-scrubland-40709.herokuapp.com/restaurants/`
  useEffect(() => {
    console.log("useEffect called for one restaurant");
    fetch(url)
      .then((res) => res.json())
      .then((json) => setRestaurant(json[id]))
      .catch((e) => console.log("Request failed: ", e));
    console.log("RESULT IN DETAILPAGE asdfgggg", restaurant);
  }, [id]);


  return (
    <div className="container">
      <div className="row m-3">
        <div className="col col-4">
          <div className="row m-1">
            <img
              style={{ padding: "0em", borderRadius: "0.3em" }}
              src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
          <div className="row m-1">
            <Jumbotron>
              <Container>
                <p>Address: {restaurant.adress}</p>
                <p>Rating Points: {restaurant.rating_points}</p>
                <p>Avarage Price: {restaurant.range_price}</p>
              </Container>
            </Jumbotron>
          </div>
          <div className="row m-1"><SingleMap value={restaurant}/></div>
        </div>

        <div className="col col-8">
          <div className="row m-1">
            <h2>{restaurant.restaurantname}</h2>
          </div>
          <div className="row m-1">
            <p>{restaurant.description}</p>
          </div>
          <div className="row m-1">
          </div>
          <div className="row m-1">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Type your name here" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tell Us About Your Experience</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Do you agree to sharing your name other users"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Share Your Comment
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
