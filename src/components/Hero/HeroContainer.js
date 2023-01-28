import styled from "styled-components";

import pageBackground from "../../assets/images/pagebackground44.jpg";


const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 130vh;

  background-image: url(${pageBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  overflow: hidden;

  @keyframes little-offset {
    0% {
      transform: translateY(-0.25em);
    }
    50% {
      transform: translateY(0.25em);
    }
    100% {
      transform: translateY(-0.25em);
    }
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 2.5em;

    margin: 0 auto;
    background-color: hsla(0, 0%, 0%, 0.4);
    z-index: 5;
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;

    position: relative;
    top: 0;
    left: 0;

    width: 100%;
    height: 75%;
    max-width: 1080px;
    margin: 0 auto;
    padding-top: 4.5em;

    z-index: 10;

    .hero-funfact {
      position: relative;
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      align-self: end;

      margin-left: auto;
      margin-right: 1.5em;

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
    display: flex;
    flex-direction: column;

    grid-column: 1 / 3;
    grid-row: 1 / 3;

    position: relative;

    margin-right: 1.5em;
    padding-top: 1em;
    padding-left: 1.5em;
  }

  .hero-brand {
    font-size: 4.5rem;
    font-weight: lighter;

    div {
      line-height: 0.9;
      color: var(--white-secondary);
      text-shadow: 4px 6px 4px var(--black-primary);
    }
  }

  .cta-button {
    font-size: 1rem;
    font-family: "Noto Serif", serif;
    text-align: center;

    width: 7.5em;
    padding: 0.5em 0.8em;
    margin-top: 1em;

    color: var(--white-secondary);
    background-color: var(--brown-primary);
    border-radius: 20px;

    cursor: pointer;

    transition: background-color 0.3s ease-out;
    animation: color-change 7s infinite ease-in-out;
    border: none;
    outline: none;

    box-shadow: 4px 6px 4px var(--black-primary);

    @keyframes color-change {
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
    display: flex;

    position: relative;
    padding: 0;

    margin: 0;
    margin-top: 1em;
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

      animation: little-offset 7s ease-in-out infinite;

      box-shadow: 0 0 78.9264px var(--black-secondary),
        0 0 45.1008px var(--black-secondary),
        0 0 26.3088px var(--black-secondary),
        0 0 13.1544px var(--black-secondary),
        0 0 3.7584px var(--black-secondary), 0 0 1.8792px var(--black-secondary);
    }

    svg {
      width: 35px;
      height: 35px;
      fill: var(--black-primary);
      filter: drop-shadow(4px 6px 4px var(--black-primary));

      transition: all 0.3s ease-out;

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

      &::before {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background-color: var(--black-secondary);
        position: absolute;
        top: 0;
        left: 0;

        box-shadow: 0 0 78.9264px var(--black-secondary),
          0 0 45.1008px var(--black-secondary),
          0 0 26.3088px var(--black-secondary),
          0 0 13.1544px var(--black-secondary),
          0 0 3.7584px var(--black-secondary),
          0 0 1.8792px var(--black-secondary);
      }
    }
    .hero-content {
      margin-right: 0;
    }
    .hero-funfact {
      margin-right: 0 !important;
      padding-right: 1.5em !important;
    }
  }
`;

export default HeroContainer;