import React from "react";
import Character from "./Character";

export const CharacterList = props => {
  console.log(props);
  return (
    <ul>
      {this.props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

