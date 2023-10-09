import { useEffect, useState } from "react";
import { CharactersFetched, Character, getCharacterType } from "./types/types";
import "./App.css";
import { CharacterComponent } from "./components/CharacterComponent";
import {BasicPagination} from "./components/BasicPagination"



function App() {
  const [characters, setCharacters] = useState<CharactersFetched | null>(null);


  const getCharacters:getCharacterType = async (pageNumber = 1) => {

    const response = await fetch(
      `https://rickandmortyapi.com/api/character?count=5&page=${pageNumber}`
    );
    const data = await response.json();
    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="container">
    <h1>Rick and Morty Characters </h1>
      <div className="characters-container">
        {characters?.results.map((character: Character) => {
          return (
            <CharacterComponent
              key={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}
      </div>

<BasicPagination getCharacters={getCharacters} pages={characters?.info.pages}/>

    </div>
  );
}

export default App;
