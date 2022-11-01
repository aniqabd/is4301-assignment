import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Home() {
  return (
    <div class="App">
      <Card>
        <Card.Img variant="top" style={{height: "550px", width: "100%"}} src="/images/nus-logo.jpeg" />
        <Card.Body>
          <Card.Text style={{ fontSize: "30px", fontFamily: "-moz-initial" }}>
            NUS is a leading research university in Asia
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
