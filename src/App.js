import React from "react";
import "./App.css";

import Header from "./Header";
import Weather from "./Weather";
import Degrees from "./Degrees";
import Stats from "./Stats";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";

import Card from "react-bootstrap/Card";

export default function App() {
  return (
    <div className="App">
      <h1 class="display-4">
        Geraldine's <small className="text-muted">SheCodes Weather App</small>
      </h1>
      <hr />

      <Card>
        <Card.Header className="card-header">
          <Header />
        </Card.Header>
        <Card.Body className="card-body">
          <Card.Text>
            <Weather />
          </Card.Text>
          <Card.Title>
            <Degrees />
          </Card.Title>
          <Card.Text>
            <Stats />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Footer />
        </Card.Footer>
      </Card>
    </div>
  );
}