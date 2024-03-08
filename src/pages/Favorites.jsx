import Cards from "../components/Cards";
import { useOutletContext } from "react-router-dom";

// -FavoriteCharactersPage.jsx should display all characters marked as favorite by the user
// :) -Route to render FavoriteCharactersPage.jsx as a child of App.jsx
// -Users should be able to add or remove Characters from their Favorites and they can't   have more than 4 favorite characters at a time

function Favorites (){
    let myOutletContextObj = useOutletContext();
    let {favorites} = myOutletContextObj

    // console.log(myOutletContextObj)

    // console.log(favorites[0].image)

    
    return (
      <div>
        <h1 className="m-20 text-4xl text-center"> FAVES: &#128125; </h1>
        <div
          id="characters-div"
          className="flex flex-wrap justify-around m-3 mb-4"
        >
          {favorites.map((character) => (
            <Cards
              id={character.id}
              imgURL={character.imgURL}
              name={character.name}
              episode={character.episode}
              status={character.status}
              species={character.species}
              location={character.location}
              key={character.id}
            />
          ))}
        </div>
      </div>
    );};

export default Favorites