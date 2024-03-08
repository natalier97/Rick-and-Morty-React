import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useOutletContext } from "react-router-dom";
import { Link, useOutlet } from "react-router-dom";



function Cards ({id, imgURL, name, episode, status, species, location, url}) {
  let navigate = useNavigate();  
  let routeToCharacter = `/characters/${id}`;
  
  let myOutletContextObj = useOutletContext();
  let {addToFavorites, checkIfFavorite, removeFromFavorites} = myOutletContextObj;

function goToDetailsPage(){
  navigate(routeToCharacter)
}

//is it a fave?
let isFavorited = checkIfFavorite(id)


//add to faves
function handleAddToFavorites () {
addToFavorites({
  id,
  imgURL,
  name,
  episode,
  status,
  species,
  location,
});
};

//remove from faves --- toggle button depending if a fave already
function renderButton(){
  //should return true or false
  if (isFavorited){
    //render remove from fave button
    return (
      <button
        onClick={() => removeFromFavorites(id)}
        className="bg-blue-300 border border-rounded"
      >
        UnFavorite &#128121;{" "}
      </button>
    );
  }

  //render addToFave button
  else {
return (
  <button
    onClick={handleAddToFavorites}
    className="bg-blue-300 border border-rounded"
  >
    Favorite &#128125;{" "}
  </button>
);
  }
}


    return (
      <Card
        className="bg-gray-300 bg-opacity-50 rounded-sm"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title className="font-bold text-blue-900">{name}</Card.Title>
          <Card.Text>I'm in this many episodes: {episode.length} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status: {status}</ListGroup.Item>
          <ListGroup.Item>Species: {species}</ListGroup.Item>
          <ListGroup.Item>Current Location: {location.name}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button
            className="bg-blue-300 border border-rounded mr-16"
            onClick={goToDetailsPage}
          >
            More Details
          </button>
          {renderButton()}
        </Card.Body>
       
      </Card>
    );
};

export default Cards;


 {
   /* <Card.Body> */
 }
 {
   /* <Card.Link className="text-blue-800"> */
 }
 {
   /* Click Here for more Details! {navigate(routeToCharacter)} */
 }
 {
   /* <Link to={routeToCharacter}> Click Here for more DEETS!</Link> */
 }
 {
   /* {/* </Card.Link> */
 }
 {
   /* </Card.Body> */
 }