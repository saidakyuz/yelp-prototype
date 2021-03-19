import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import MapComponent from "./components/MapComponent";
import CardComponent from "./components/CardComponent";
import Sticky from "react-stickynode";
import "./App.css";

export default function LandingPage({ result }) {
  console.log("RESULT IN LANDING PAGE", result);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={7}>
            <CardComponent result={result} />
          </Col>
          <Col sm={5}>
            <Sticky>
              <MapComponent result={result} />
            </Sticky>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
