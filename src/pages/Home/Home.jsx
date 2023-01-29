import React from "react";
import { Link } from "react-router-dom";
import Wizard from "../../assets/wizard.svg";
import Book from "../../assets/book.svg";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="homeTitle">Welcome adventurer!</h1>
      <div className="links">
        <Link className="card" to="/deities">
          <img src={Book} alt="" />
          <h1> Deities </h1>
          <p>
            {" "}
            A list of the deities that control the universe in which Revalyeth
            exists. Each one symbolizes one of the 9 major aligments and a set
            of rules for their followers.{" "}
          </p>
        </Link>
        <Link className="card" to="/character/builder">
          <img src={Wizard} alt="" />
          <h1> Character Builder </h1>
          <p>
            {" "}
            Create your character and venture out on an intrepid quest on the
            magical world of roleplaying games{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
