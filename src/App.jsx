import React from "react";
import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
const [favorites, setFavorites] = useState([]);


function addToFavorites (character) {
  //can only have 4 faves
  if (favorites.length < 4){
  let updatedFaves = [...favorites, character];
  setFavorites(updatedFaves) //updating state
  } else {alert('CAN ONLY HAVE 4 FAVORITES')}
}


//is favorite??? returns true or false
function checkIfFavorite (characterID) {
return (favorites.filter((character) =>{
  if (character.id === characterID){
    return true
  } else {return false}
})).length //if this length is >0 (truthy), if 0 (falsy)
}



function removeFromFavorites (characterID){
let updatedFaves = favorites.filter((character) => {
  if (character.id === characterID){
    //person to delete
    return false
  } else {return true} //keeping this person
  
});
setFavorites(updatedFaves) //updating state

};


const contextObj = {
  favorites,
  addToFavorites,
  checkIfFavorite, 
  removeFromFavorites
}


  return (
    <>
    <NavBar />
      <Outlet context={contextObj}/>
    </>
  );
}

export default App;
