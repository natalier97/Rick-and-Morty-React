// -CharacterDetailsPage.jsx should display all the information pertaining to a single character. Ensure to utilize useParams.
// -A dynamic route that will display CharacterDetailsPage.jsx
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dropdown from "../components/Dropdown";

//formatting is still trash

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  async function getACharacter() {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    //returns an object --> at
    let characterData = response.data;
    // console.log(characterData.location);
    setCharacter(characterData);
  }

  useEffect(() => {
    getACharacter();
  }, []);

  function handleEpisodes() {
    console.log(character.episode)
    let episodeArr = character.episode;
   return (
     <div className="w-4/5 mx-auto overflow-x-auto">
       <div className="flex ">
         {character.episode.map((ep, i) => (
           <div
             className="border-2 px-3 py-1 h-10 bg-yellow-300 bg-opacity-50 m-2"
             key={i}
           >
             {ep}
           </div>
         ))}
       </div>
     </div>
   );
    }
  

  function showCharacter() {
    return (
      <div className="">
        <div
          id="imageContainer"
          className="flex justify-center items-center mt-20"
        >
          <img src={character.image} />
        </div>
        <div className="text-3xl text-center mb-6">
          {character.name}, is: {character.status}
        </div>
        <div
          id="textContainer"
          className="flex justify-items-center justify-around"
        >
          <div id="locationContainer" className="text-2xl">
            Last Known Location:{" "}
            {character.location ? character.location.name : null}
          </div>
          <div id="originContainer" className="text-2xl">
            Origin: {character.origin ? character.location.name : null}
          </div>
        </div>
      </div>
    );
  }

    // console.log(character.episode);
  return (
    <React.Fragment>
      <h1 className="text-5xl font-bold text-center mt-20 text-blue-600">
        {" "}
        MORE DETAILS
      </h1>
      {showCharacter()}
      <div id="episodeContainer" className="text-center">
        {character.episode ? handleEpisodes() : null}
      </div>
    </React.Fragment>
  );
}

export default CharacterDetails;

// <Cards  id={character.id}
//           imgURL={character.image}
//           name={character.name}
//           episode={character.episode}
//           status={character.status}
//           species={character.species}
//           location={character.location}
//           url={character.url}
//           key={character.id}  />
