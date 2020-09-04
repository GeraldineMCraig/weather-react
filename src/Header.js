import React from "react";
import "./Header.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function Header() {
  return (
    <div>
      <Row>
        <Col sm={7}>
          <Card.Text className="cities">
            Lisbon | Paris | Sydney | San Francisco
          </Card.Text>
        </Col>
        <Col sm={5}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </Button>
              <input
                type="submit"
                value="🔍"
                className="btn btn-outline-secondary"
              />
            </InputGroup.Prepend>
            <FormControl
              aria-describedby="basic-addon1"
              type="search"
              placeholder="Type a city..."
              autofocus="on"
              autocomplete="off"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}