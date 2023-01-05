import React, { useState } from "react";
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

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          {/* main */}
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> dev
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* Pop up */}
          <div
            onClick={() => {
              // close modal when outside of modal is clicked
              closeModal();
            }}
          >
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
                <h3 className="services__modal-title">Frontend dev 1</h3>
                <p className="services__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore rem corporis ullam voluptate, eligendi repellendus
                  officia vitae dolorum consectetur minima itaque id. Odio eaque
                  incidunt a et nisi soluta rerum!
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          {/* main */}
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> dev
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          {/* Pop up */}
          <div
            onClick={() => {
              // close modal when outside of modal is clicked
              closeModal();
            }}
          >
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
                <h3 className="services__modal-title">Frontend dev 2</h3>
                <p className="services__modal-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore rem corporis ullam voluptate, eligendi repellendus
                  officia vitae dolorum consectetur minima itaque id. Odio eaque
                  incidunt a et nisi soluta rerum!
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
            onClick={() => {
              // close modal when outside of modal is clicked
              closeModal();
            }}
          >
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore rem corporis ullam voluptate, eligendi repellendus
                  officia vitae dolorum consectetur minima itaque id. Odio eaque
                  incidunt a et nisi soluta rerum!
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
