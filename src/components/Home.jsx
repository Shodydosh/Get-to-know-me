import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import "../helpers/vanillaTilt.js";
import "../assets/scss/home.scss";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* contains social links */}
          <Social />

          <div
            data-tilt
            data-tilt-glare
            data-tilt-max-glare="0.3"
            data-tilt-reverse="true"
            className="home__img"
          ></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
