import * as React from "react";

import FeaturesContainer from "./FeaturesContainer";

import featureItems from "./featureItems";

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <div className="features-inner">
        <h2 className="features-title">Features</h2>
        {featureItems.map((item, i) => {
          return (
            <div key={`feature-${i}`} className="features-item">
              <div
                className="features-item__icon"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="features-item__info">
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </FeaturesContainer>
  );
};


export default Features;
