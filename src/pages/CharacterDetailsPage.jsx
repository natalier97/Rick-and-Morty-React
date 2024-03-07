// -CharacterDetailsPage.jsx should display all the information pertaining to a single character. Ensure to utilize useParams.
// -A dynamic route that will display CharacterDetailsPage.jsx
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  async function getACharacter() {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    //returns an object --> at
    let characterData = response.data;
    console.log(characterData.location);
    setCharacter(characterData);
  }

  useEffect(() => {
    getACharacter();
  }, []);

  //   if (character.length < 0){
  //     const { image, name, status } = character;
  //   }

  function showCharacter() {
    return (
      <div>
        <div>
          {character.location && character.location.name}
          {character.name} {character.status}
        </div>
        <img src={character.image} />
      </div>
    );
  } 
 
  console.log(character);
  return (
    <React.Fragment>
      <h1 className="mt-16"> char details:</h1>
      {showCharacter()}
    
    </React.Fragment>
  );
}

export default CharacterDetails;
