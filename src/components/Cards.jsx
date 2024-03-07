import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';



function Cards ({imgURL, name, episode, status, species, location, url}) {
    
    return (
      <Card className="bg-gray-300 bg-opacity-50 rounded-sm" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title className="font-bold text-blue-900">{name}</Card.Title>
          <Card.Text >I'm in this many episodes: {episode.length} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status: {status}</ListGroup.Item>
          <ListGroup.Item>Species: {species}</ListGroup.Item>
          <ListGroup.Item>Current Location: {location.name}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link className="text-blue-800" href={url}>
            API URL
          </Card.Link>
        </Card.Body>
      </Card>
    );cd 
};

export default Cards;