import React from "react";
import SwordButton from "../../components/SwordButton/SwordButton";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const CharacterBuilder = () => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("class");
  };
  return (
    <div className="characterBuilder">
      <h1>Welcome to the great tomb of Character Building!</h1>
      <h2>
        Traverse through this dangerous dungeon and come out as a fierce
        adventurer.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="charInput">
          <label> Character Name </label>
          <input
            type="text"
            placeholder="The name of your character"
            required
          />
        </div>
        <SwordButton />
      </form>
    </div>
  );
};

export default CharacterBuilder;
