import * as React from "react";
import styled from "styled-components";
import pageBackground from "../assets/images/pagebackground44.jpg";
import Funfact from "./FunFact";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";

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

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 130vh;
  background-image: url(${pageBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 2.5em;
    margin: 0 auto;
    background-color: hsla(0, 0%, 0%, 0.5);
    /* background-image: linear-gradient(
      99deg,
      hsla(0, 0%, 0%, 0.5) 0%,
      hsla(0, 0%, 0%, 0.5) 33.333%,
      transparent 33.333%,
      transparent 66.667%,
      hsla(0, 0%, 0%, 0.5) 66.667%,
      hsla(0, 0%, 0%, 0.5) 100%
    ); */
    z-index: 5;
  }

  .hero-inner {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 75%;
    max-width: 1080px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    padding-top: 5em;

    z-index: 10;

    .hero-funfact {
      position: relative;
      grid-column: 1 / 3;
      grid-row: 3 / 4;

      margin-left: auto;
      margin-right: 1.5em;
      align-self: end;
      /* border-top: 1px solid black; */

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--black-secondary);
        position: absolute;
        bottom: 0;
        left: 0;

        box-shadow: 0 0 78.9264px var(--black-secondary),
          0 0 45.1008px var(--black-secondary),
          0 0 26.3088px var(--black-secondary),
          0 0 13.1544px var(--black-secondary),
          0 0 3.7584px var(--black-secondary),
          0 0 1.8792px var(--black-secondary);
      }
    }
  }
  .hero-content {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 1em;
    margin-right: 1.5em;
    padding-left: 1.5em;

    /* border-top: 1px solid black; */

    /* border-radius: 1em; */
  }

  .hero-brand {
    font-size: 4.5rem;
    font-weight: lighter;
    div {
      line-height: 0.9;
      text-shadow: 4px 8px 4px var(--black-primary);
      color: var(--white-secondary);
    }
  }

  .cta-button {
    font-family: "Noto Serif", serif;
    font-size: 1rem;
    padding: 0.5em 0.8em;
    text-align: center;
    border-radius: 20px;
    margin-top: 1em;
    background-color: var(--brown-primary);
    color: var(--white-secondary);
    width: 7.5em;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
    animation: little-offset 7s infinite;
    border: none;
    outline: none;

    box-shadow: 4px 8px 4px var(--black-primary);

    @keyframes little-offset {
      0% {
        background-color: var(--brown-primary);
      }
      50% {
        background-color: var(--brown-secondary);
      }
      100% {
        background-color: var(--brown-primary);
      }
    }

    &:hover {
      background-color: var(--black-primary);
      animation: none;
    }
  }

  .hero-links {
    position: relative;
    padding: 0;
    margin: 0;
    margin-top: 1em;
    display: flex;
    padding-bottom: 1.25em;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--black-secondary);
      position: absolute;
      bottom: 0;
      left: 0;

      box-shadow: 0 0 78.9264px var(--black-secondary),
        0 0 45.1008px var(--black-secondary),
        0 0 26.3088px var(--black-secondary),
        0 0 13.1544px var(--black-secondary),
        0 0 3.7584px var(--black-secondary), 0 0 1.8792px var(--black-secondary);
    }

    svg {
      width: 35px;
      height: 35px;
      transition: all 0.3s ease-out;
      fill: var(--black-primary);
      filter: drop-shadow(4px 8px 4px var(--black-primary));

      &:hover {
        transform: scale(1.1);
        fill: var(--brown-secondary);
      }
    }

    * + * {
      margin-left: 0.5em;
    }
  }

  @media (min-width: 45em) {
    .hero-brand {
      font-size: 6rem;
    }
    .cta-button {
      margin-top: 1.25em;
    }
    .hero-links {
      margin-top: 1.25em;
    }
  }

  @media (min-width: 1080px) {
    .hero-inner {
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background-color: var(--black-secondary);
        position: absolute;
        top: 0;
        right: 0;

        box-shadow: 0 0 78.9264px var(--black-secondary),
          0 0 45.1008px var(--black-secondary),
          0 0 26.3088px var(--black-secondary),
          0 0 13.1544px var(--black-secondary),
          0 0 3.7584px var(--black-secondary),
          0 0 1.8792px var(--black-secondary);
      }
    }
    .hero-content {
      padding-left: 0;
      margin-right: 0;
    }
    .hero-funfact {
      margin-right: 0 !important;
      padding-right: 1.5em !important;
    }
  }
`;

export default Hero;
