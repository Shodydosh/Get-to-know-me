import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      {/* hidden box only appear in mobile devices */}
      <div className="about__box">
        <i className="bx bx-code-curly about__icon"></i>
        <h3 className="about__title">Web developer</h3>
        <span className="about__subtitle">ReactJS, Scss, NodeJS</span>
      </div>

      <div className="about__box about__hidden-box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 Months</span>
      </div>

      <div className="about__box">
        <i className="bx bx-book-bookmark about__icon"></i>
        <h3 className="about__title">English fluency</h3>
        <span className="about__subtitle">900+ TOEIC L&R</span>
      </div>

      <div className="about__box">
        <i className="bx bx-flag about__icon"></i>
        <h3 className="about__title">Problems solving</h3>
        <span className="about__subtitle">250+ Leetcode problems</span>
      </div>
    </div>
  );
};

export default Info;
