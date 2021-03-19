import React from "react";
import mockdata from "./mock-data.json";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  const idFake = 1;
  const photoUrl = ""; // I need photo url data!
  const description = mockdata[0].description;
  const name = mockdata[0].restaurant_name;
  const rPoints = mockdata[0].rating_points;
  const rPrice = mockdata[0].range_price;
  const address = mockdata[0].address;
  const comments = mockdata[0].comment;
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
                <p>Address: {address}</p>
                <p>Rating Points: {rPoints}</p>
                <p>Avarage Price: {rPrice}</p>
              </Container>
            </Jumbotron>
          </div>
          <div className="row m-1">I will call the Map component here...</div>
        </div>

        <div className="col col-8">
          <div className="row m-1">
            <h2>{name}</h2>
          </div>
          <div className="row m-1">
            <p>{description}</p>
          </div>
          <div className="row m-1">
            previous comments will be called here... Waiting for json
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
