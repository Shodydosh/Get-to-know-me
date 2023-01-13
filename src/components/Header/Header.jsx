import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  // managing state showing the menu
  // initial status of menu is bottom: -100%
  const [Toggle, showMenu] = useState(true);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo active-link">
          TUNG
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-heart-sign nav__icon"></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>

            <li
              className="uil uil-times nav__close"
              onClick={() => showMenu(!Toggle)}
            ></li>
          </ul>
        </div>

        {/* nav open buttons */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
