import React from "react";
import SwordButton from "../../components/SwordButton/SwordButton";
import "./styles.scss";

const CharacterBuilder = () => {
  return (
    <div className="characterBuilder">
      <h1>Welcome to the great tomb of Character Building!</h1>
      <h2>
        Traverse to this dangerous dungeon and come out as a fierce adventurer
      </h2>
      <SwordButton />
    </div>
  );
};

export default CharacterBuilder;
