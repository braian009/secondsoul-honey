import * as React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <div class="about-inner">
        <h2 class="about-title">About us</h2>

        <div class="about-img"></div>
        <div class="about-info">
          <h3>some titile of some kind</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit
            molestiae quis nihil dolore, impedit quaerat fuga voluptas
            praesentium facere maiores sed laborum, magnam eius aperiam sapiente
            error modi totam sunt odio corporis iste. Accusamus perferendis
            impedit asperiores quia suscipit?
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
    background-color: gray;
    opacity: 0.2;
    border: 1px solid var(--brown-primary);
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

  @media (min-width: 50em) {
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

      h3 {
        text-align: left;
      }
      p {
        text-align: left;
      }
    }
  }
`;

export default About;
