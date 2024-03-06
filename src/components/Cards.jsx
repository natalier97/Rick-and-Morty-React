import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';



function Cards (imgURL, name, episode, status, species, location, url) {
    
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Appears in: {episode.length} episodes
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status: {status}</ListGroup.Item>
          <ListGroup.Item>Species: {species}</ListGroup.Item>
          <ListGroup.Item>Current Location: {location.name}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={url}>API URL</Card.Link>
        </Card.Body>
      </Card>
    );
};

export default Cards;