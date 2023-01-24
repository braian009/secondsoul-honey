import * as React from "react";
import styled from "styled-components";
import aboutFarm from "../assets/images/about1.jpg";
import aboutBeekepers from "../assets/images/about2.jpg";

const About = () => {
  return (
    <AboutContainer>
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

const AboutContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 1.5em 0 1.5em;
  position: relative;
  top: -2.5em;

  background-color: var(--black-primary);

  .about-title {
    text-align: center;
  }

  .about-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    width: 100%;
    margin: 0 auto;
    gap: 1.5em;
    background-color: var(--black-primary);
    padding: 0 2.5em;

    border-radius: 0.5em;
  }

  .about-img {
    width: 100%;
    max-width: 420px;
    justify-self: center;
    height: 18em;
    background-image: url(${aboutFarm});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid var(--brown-primary);
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
    align-self: center;
    justify-self: center;
    max-width: 420px;
  }

  .about-info h2 {
    line-height: 0.9;
    text-align: left;
  }

  .about-info p {
    margin: 0;
    text-align: left;

    margin-top: 1em;
  }

  @media (min-width: 35em) {
    padding: 0 1.5em 1.5em 1.5em;
    background-image: linear-gradient(
      to bottom,
      var(--white-opaque) 0%,
      var(--white-opaque) 50%,
      var(--black-primary) 50%,
      var(--black-primary) 100%
    );

    .about-inner {
      max-width: calc(420px + 6em);
      padding-top: 1.5em;
      padding-bottom: 1.5em;
    }
  }

  @media (min-width: 55em) {
    .about-inner {
      grid-template-columns: 1fr 1fr;
      padding: 1.5em;
      gap: 1.5em;
      max-width: 980px;
    }

    .about-title {
      grid-column: span 2;
    }

    .about-img {
      grid-column: span 1;
      justify-self: right;
    }

    .about-info {
      justify-self: left;
      grid-column: span 1;

      h4 {
        text-align: left;
        line-height: 1.2;

      }
      p {
        text-align: left;
      }
    }
  }
`;

export default About;
