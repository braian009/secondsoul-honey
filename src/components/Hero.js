import * as React from "react";
import styled from "styled-components";
import pageBackground from "../assets/images/pagebackground44.jpg";
import Funfact from "./FunFact";

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
          <div className="cta-button" onClick={() => console.log('a')}>Order now</div>
        </div>
        <div className="hero-funfact">
          <Funfact />
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 130vh;
  background-image: url(${pageBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  /* z-index: -10; */

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 2.5em;
    margin: 0 auto;
    background-color: hsla(0, 0%, 0%, 0.5);
    z-index: 5;
  }

  .hero-inner {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2.5em;
    z-index: 10;

    .hero-funfact {
      margin-left: auto;
    }
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 1.5em;
    padding-left: 1.5em;
  }

  .hero-brand {
    font-size: 4rem;
    font-weight: lighter;

    div {
      line-height: 0.9;
    }
  }

  .cta-button {
    padding: 0.5em 0.8em;
    text-align: center;
    border-radius: 20px;
    margin-top: 1em;
    background-color: var(--brown-primary);
    width: 7.5em;
  }

  @media (min-width: 1080px) {
    .hero-content {
      padding-left: 0;
    }
  }
`;

export default Hero;
