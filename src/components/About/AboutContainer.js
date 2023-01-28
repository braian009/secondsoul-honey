import styled from "styled-components";

import aboutFarm from "../../assets/images/about1.jpg";
import aboutBeekepers from "../../assets/images/about2.jpg";


const AboutContainer = styled.section`
  position: relative;
  top: -2.5em;

  width: 100%;
  padding: 2.5em 0 1em;
  margin: 0 auto;

  background-color: var(--black-primary);

  .about-title {
    text-align: center;
  }

  .about-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1.5em;
    place-items: center;

    width: 100%;
    padding: 0 1em;
    margin: 0 auto;

    background-color: var(--black-primary);
  }

  .about-img {
    width: 100%;
    height: 18em;
    max-width: 420px;

    justify-self: center;

    background-image: url(${aboutFarm});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 0.7em;
    border: 2px solid var(--brown-secondary);
    transition: all 0.3s linear;
    animation: alternate-pic 14s infinite;

    @keyframes alternate-pic {
      0% {
        background-image: url(${aboutFarm});
      }
      50% {
        background-image: url(${aboutBeekepers});
      }
      100% {
        background-image: url(${aboutFarm});
      }
    }
  }

  .about-info {
    width: 100%;
    max-width: 420px;

    h4 {
      line-height: 0.9;
      text-align: left;
    }

    p {
      margin: 0;
      margin-top: 1em;
      text-align: left;
      color: var(--white-secondary);
    }
  }

  @media (min-width: 35em) {
    padding: 1.5em;
    padding-top: 0;
    background-image: linear-gradient(
      to bottom,
      var(--white-opaque) 0%,
      var(--white-opaque) 50%,
      var(--black-primary) 50%,
      var(--black-primary) 100%
    );

    .about-inner {
      max-width: calc(420px + 6em);
      padding: 1.5em 2.5em;
      border-radius: 0.7em;
    }
  }

  @media (min-width: 55em) {
    .about-inner {
      grid-template-columns: 1fr 1fr;
      gap: 1.5em;
      padding: 1.5em;
      max-width: 980px;

      .about-title {
        grid-column: span 2;
      }

      .about-img {
        grid-column: span 1;
        justify-self: right;
      }

      .about-info {
        grid-column: span 1;
        justify-self: left;

        h4 {
          text-align: left;
          line-height: 1.2;
        }
        p {
          text-align: left;
        }
      }
    }
  }
`;

export default AboutContainer;