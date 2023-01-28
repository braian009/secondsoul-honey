import * as React from "react";

import ValuesContainer from "./ValuesContainer";

const Values = () => {
  return (
    <ValuesContainer id="values">
      <div className="values-inner">
        <h2 className="values-title">Our Values</h2>
        <div className="values-item">
          <div className="values-item__title">
            <h4>Transparency</h4>
            <div  className="values-item__line"></div>
          </div>
          <p>
            We want our customers to know exactly what they are getting when
            they purchase our honey from us.
          </p>
        </div>
        <div className="values-item">
          <div className="values-item__title">
            <h4>Community</h4>
            <div  className="values-item__line"></div>
          </div>
          <p>
            We believe in giving back to the community, and we try to do it so
            through partnerships, collaborations and supporting social and
            charitable causes
          </p>
        </div>
        <div className="values-item">
          <div className="values-item__title">
            <h4>Sustainability</h4>
            <div  className="values-item__line"></div>
          </div>
          <p>
            We use organic and natural practices in our production process, and
            we support conservation efforts to protect bees and their habitats.
          </p>
        </div>
      </div>
    </ValuesContainer>
  );
};


export default Values;
