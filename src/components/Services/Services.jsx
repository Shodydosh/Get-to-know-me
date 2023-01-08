import React, { useState, useRef, useEffect } from "react";
import "./services.scss";

const Services = () => {
  // managing state of services modals
  // initial value of modals are visibility: hidden
  const [ToggleState, setToggleState] = useState(0);

  const toggleModal = (index) => {
    setToggleState(index);
  };
  const closeModal = () => {
    setToggleState(0);
  };

  // Handle close "View more" modal when clicking outside of modal

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {/* REACTJS DEV */}
        <div className="services__content">
          {/* main */}
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              ReactJs <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* Pop up */}
          <div
            className={
              ToggleState === 1
                ? "services__modal active-modal"
                : "services__modal unactive-modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => closeModal()}
              ></i>
              <h3 className="services__modal-title">ReactJs Developer</h3>
              <p className="services__modal-description">
                As a ReactJS developer, I am skilled in building efficient and
                scalable user interfaces using the ReactJS JavaScript library.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build a visually appealing and responsive user interface for
                    the client's website or application using HTML, CSS, and
                    JavaScript.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Implement design elements and layouts as per the client's
                    specifications.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop and maintain the client's website or application to
                    ensure it is compatible with various web browsers and
                    devices.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Optimize the website or application for search engines to
                    improve the client's online presence.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborate with the client and other team members to gather
                    requirements, identify project goals, and ensure that the
                    final product meets the client's needs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* UI/UX DESIGNER */}
        <div className="services__content">
          {/* main */}
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* Pop up */}
          <div
            className={
              ToggleState === 2
                ? "services__modal active-modal"
                : "services__modal unactive-modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => closeModal()}
              ></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                As a UI/UX designer, I am highly creative and analytical, with a
                strong interest in designing products that are intuitive and
                easy to use
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could conduct user research to understand the needs and
                    behaviors of my clients' target audiences, and use this
                    information to inform the design of their products.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could create wireframes and prototypes to help my clients
                    visualize and test the layout, navigation, and functionality
                    of their products.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could design the user interface of my clients' products,
                    including the layout, visual design, and interactions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could conduct usability testing to gather feedback on the
                    usability of my clients' products and identify areas for
                    improvement.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could work with my clients to design and develop new
                    products, including mobile apps, websites, and software
                    applications.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* GRAPHIC DESIGNER */}
        <div className="services__content">
          {/* main */}
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Graphic <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* Pop up */}
          <div
            className={
              ToggleState === 3
                ? "services__modal active-modal"
                : "services__modal unactive-modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => closeModal()}
              ></i>
              <h3 className="services__modal-title">Graphic Designer</h3>
              <p className="services__modal-description">
                I am a graphic designer who is highly creative and pays close
                attention to detail. I have a strong enthusiasm for visual
                design and am skilled in using a variety of design software
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    As a graphic designer, I am a creative and detail-oriented
                    individual with a strong passion for visual design
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could design and develop websites for my clients,
                    including layout, graphics, and overall user experience.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could work with clients to develop cohesive brand
                    identities that will be used across various mediums, such as
                    business cards, websites, and social media.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could design packaging for my clients' products, including
                    packaging for physical products as well as digital products
                    like software.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I could create slide decks and other visual materials for
                    presentations and pitches for my clients.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
