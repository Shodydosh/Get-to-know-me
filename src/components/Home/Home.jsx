import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import "../../helpers/vanillaTilt.js";
import "./home.scss";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* contains social links */}
          <Social />

          <div className="home__img-container">
            <div className="home__img"></div>
          </div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
