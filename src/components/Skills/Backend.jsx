import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        {/* GROUP 1 */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">NodeJS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">ExpressJS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        {/* GROUP 2 */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">Python</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">Npm</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
