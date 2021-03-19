import React from "react";

import {Container, Row, Col} from "react-bootstrap";
import MapComponent from './components/MapComponent';
import CardComponent from './components/CardComponent';
import Sticky from 'react-stickynode';
import './App.css';


export default function LandingPage() {
  return (
    <div>
      {/* <Header/>
        Banner
        Searchbar

        CityFilter*/}

        <Container>
          <Row>
            <Col sm={7}><CardComponent/></Col>
            <Col sm={5}>
              <Sticky>
                <MapComponent/>
              </Sticky>
            </Col>
          </Row>
        </Container>

      {/* <Footer/> */}
    </div>
  );
}
