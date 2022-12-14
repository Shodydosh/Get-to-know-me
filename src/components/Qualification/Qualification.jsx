import React, { useState } from "react";
import "./qualification.scss";

const Qualification = () => {
  const [QualificationState, setQualificationState] = useState(0);

  const toggleState = (index) => {
    console.log(index);
    setQualificationState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleState(0)}
            className={
              QualificationState === 0
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            onClick={() => toggleState(1)}
            className={
              QualificationState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              QualificationState === 0
                ? "qualification__content-active"
                : "qualification__content-inactive"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Information Technology</h3>
                <span className="qualification__subtitle">
                  Posts and Telecommunications Institute of Technology - VietNam
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Majoring in Math</h3>
                <span className="qualification__subtitle">
                  Vo Nguyen Giap Gifted High School - VietNam
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Honors Program</h3>
                <span className="qualification__subtitle">
                  Dong My Secondary School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2013 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          {/* EXPERIENCE */}
          {/* EXPERIENCE */}

          <div
            className={
              QualificationState === 1
                ? "qualification__content-active"
                : "qualification__content-inactive"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">TodoApp</h3>
                <span className="qualification__subtitle">
                  Personal Project
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">TodoApp</h3>
                <span className="qualification__subtitle">
                  Personal Project
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">TodoApp</h3>
                <span className="qualification__subtitle">
                  Personal Project
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
