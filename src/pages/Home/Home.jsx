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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
            temporibus dolores? Deserunt earum maiores dolorem magnam, quisquam
            cum ex eligendi.{" "}
          </p>
        </Link>
        <Link className="card" to="/characterbuilder">
          <img src={Wizard} alt="" />
          <h1> Character Builder </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
            temporibus dolores? Deserunt earum maiores dolorem magnam, quisquam
            cum ex eligendi.{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
