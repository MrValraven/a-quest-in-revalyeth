import React from "react";
import "./styles.scss";

const AdventurerClassList = ({ image, name, description, children }) => {
  return (
    <div>
      {children}
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AdventurerClassList;
