import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";

// should render a Card BootStrap Component (displaying image and information of said character) for every character within the Rick and Morty API (https://rickandmortyapi.com/)
//   Maybe use useState, useEffect, axios, async, map, conditional rendering?

function Characters() {
const [data, setData] = useState([])
  //response = need to accesss API for all chars (https://rickandmortyapi.com/api/character)
  //826 chars, separated in pages --> pg param("/?page=2")
    async function getAllChars() {
      let num = 1;
      let tempData = [];
      while (num < 43) {
        let response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${num}`
        );

        //info contains {pages: <#ofpages>, next:<url of next page>, prev: <url of prev page>}
        let info = response.data.info;

        //results is an array of of objects --> each obj has following keys: (id, name, status, species, type?, gender, origin{}, location{}, image, episode[urls], url)
        let results = response.data.results;
        tempData = [...tempData, ...results];

        //increment num
        num++;
      }; //end of while loop

      //setting useState
      setData(tempData);
      console.log(`this is DATA: ${data}`);
    };


    useEffect(() => {
      getAllChars();
    }, []);


  function renderData () {
    return (
      // need to map through results and render card for each char on page
        data.map((character) => {
            return (
            <div key={character.id}>
                {character.name} {character.status}
                <img src={character.image} />
            </div>)
            console.log(`this is character: ${character}`);
        }))
  }


  //try/catch for errors


  return (
    <React.Fragment>
      <h3>these are the characters: -rick -morty</h3>
      {renderData()}

    </React.Fragment>
  );
}

export default Characters;
