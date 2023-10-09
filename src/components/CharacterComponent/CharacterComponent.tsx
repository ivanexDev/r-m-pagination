import React from "react";
import "./CharacterComponent.css";
import { Character } from "../../types/types";


const CharacterComponent: React.FC<Character> = ({name, image}) => {
  return (
    <>
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </div>
    </>
  );
};

export default CharacterComponent;
