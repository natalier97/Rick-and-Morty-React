import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Cards ({id, imgURL, name, episode, status, species, location, url}) {
  let navigate = useNavigate();  
  let routeToCharacter = `/characters/${id}`;




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
          <Card.Link className="text-blue-800" >
            {/* Click Here for more Details! {navigate(routeToCharacter)} */}
            <Link to={routeToCharacter}> Click Here for more DEETS!</Link>
          </Card.Link>
        </Card.Body>
      </Card>
    );
};

export default Cards;