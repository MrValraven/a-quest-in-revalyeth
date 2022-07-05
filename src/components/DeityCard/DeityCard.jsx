import React, { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom'
import "./styles.scss";

const DeityCard = ({ godImage, symbol, name, title, alignment }) => {
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setImage(godImage);
  }, []);

  return (
    <div className="deityCardContainer">
      <div
        className="deityCard"
        onMouseEnter={() => setImage(symbol)}
        onMouseLeave={() => setImage(godImage)}
      >
        {image === godImage ? (
          <img src={godImage} />
        ) : (
          <img className="isImgHovered" src={symbol} />
        )}
        <div className="details">
          <h2>{name}</h2>
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic porro
            architecto provident modi? Veniam, error?
          </p>
          <button onClick={() => navigate(`${name}`)}>Details</button>
        </div>
      </div>
      <h4 className="alignment">{alignment}</h4>
    </div>
  );
};

export default DeityCard;
