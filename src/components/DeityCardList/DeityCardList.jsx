import React from "react";
import "./styles.scss";
import DeityCard from "../DeityCard/DeityCard";
import gods from "../../static/gods";

const DeityCardList = () => {
  return (
    <div className="deityCardList">
      {gods.map((god) => (
        <DeityCard
          key={god.id}
          godImage={god.image}
          symbol={god.symbol}
          name={god.details.name}
          title={god.details.title}
          alignment={god.details.alignment}
        />
      ))}
    </div>
  );
};

export default DeityCardList;
