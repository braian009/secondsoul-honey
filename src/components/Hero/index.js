import * as React from "react";

import HeroContainer from "./HeroContainer";

import Funfact from "../Funfact";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-brand">
            <div>Second</div>
            <div>Soul.</div>
          </div>
          <button className="cta-button" onClick={() => console.log("a")}>
            Order now
          </button>
          <div className="hero-links">
            <div className="hero-links__item">
              <Instagram />
            </div>
            <div className="hero-links__item">
              <Twitter />
            </div>
          </div>
        </div>
        <div className="hero-funfact">
          <Funfact />
        </div>
      </div>
    </HeroContainer>
  );
};


export default Hero;
