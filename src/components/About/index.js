import * as React from "react";

import AboutContainer from "./AboutContainer";

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="about-inner">
        <h2 className="about-title">About us</h2>

        <div className="about-img"></div>
        <div className="about-info">
          <h4>From our family farm to your table...</h4>
          <p>
            Our honey business began on a small family farm, where our founder,
            Jim, was fascinated by the honeybees and their honey. He studied
            beekeeping and started producing honey on his farm. As the business
            grew, he built a processing facility and started collaborating with
            other local beekeepers. Today, we are one of the leading honey
            producers in the area, known for producing high-quality honey using
            traditional methods.
          </p>
        </div>
      </div>
    </AboutContainer>
  );
};



export default About;
