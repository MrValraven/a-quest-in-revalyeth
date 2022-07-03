import React from "react";
import "./styles.scss";

const SwordButton = ({ buttonText = "Get started" }) => {
  return <button className="swordButton">{buttonText}</button>;
};

export default SwordButton;
