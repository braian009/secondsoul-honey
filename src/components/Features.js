import * as React from "react";
import styled from "styled-components";

const Features = () => {
  return (
    <FeaturesContainer>
      <div class="features-inner">
        <h2 class="features-title">some title</h2>

        <div class="features-item">
          <h4>some title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            animi laudantium delectus odit eius minima voluptatum quisquam
            similique qui quod.
          </p>
        </div>
        <div class="features-item">
          <h4>some title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            animi laudantium delectus odit eius minima voluptatum quisquam
            similique qui quod.
          </p>
        </div>
        <div class="features-item">
          <h4>some title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            animi laudantium delectus odit eius minima voluptatum quisquam
            similique qui quod.
          </p>
        </div>
      </div>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 2.5em 1.5em 2.5em;

  color: var(--whi);

  .features-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1em;
    padding: 0 1em;
    width: 100%;
    max-width: calc(420px + 6em);
    margin: 0 auto;
    .features-title {
      text-align: center;
      margin-bottom: .5em;
    }

    .features-item {
      padding: 1em;
      border-radius: 0.5em;
      border: 1px solid var(--brown-primary);

      h4 {
        margin-bottom: 1em;
      }
    }
  }

  @media (min-width: 35em) {
    .features-inner {
        padding: 0;
    }
  }

  @media (min-width: 50em) {
    .features-inner {
      grid-template-columns: 1fr 1fr 1fr;
    max-width: 980px;

      .features-title {
        grid-column: span 3;
      }

      .features-item {
        grid-column: span 1;
      }
    }
  }
`;

export default Features;
