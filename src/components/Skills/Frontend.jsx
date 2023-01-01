import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        {/* GROUP 1 */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        {/* GROUP 2 */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">ReactJS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">SCSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div className="skills__name">
              <h3 className="skills__menu">Designing</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
