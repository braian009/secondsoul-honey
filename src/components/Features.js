import * as React from "react";
import styled from "styled-components";
import featureItems from "./featureItems";

const Features = () => {
  return (
    <FeaturesContainer>
      <div className="features-inner">
        <h2 className="features-title">Features</h2>
        {featureItems.map((item, i) => {
          return (
            <div key={`feature-${i}`} className="features-item">
              <div
                className="features-item__icon"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="features-item__info"><p>{item.description}</p></div>
            </div>
          );
        })}
      </div>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3.5em 0 3.5em;

  .features-inner {
    display: grid;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 0.5em;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1em;

    .features-title {
        text-align: center;
        margin-bottom: 0.5em;
    }

    @media (min-width: 50em) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 1.75em;

        .features-title {
            grid-column: span 3;
        }

        .features-item {
            grid-column: span 1;
        }
    }

    .features-item {
        display: flex;
        flex-direction: column;
      height: 22em;
      width: 100%;
      padding: 1em;

      max-width: 520px;
      margin: 0 auto;


      /* border: 1px solid var(--brown-primary); */
      border-radius: 0.7em;
      background: none;
      box-shadow: 2px 2px 4px 0px var(--brown-primary);
/* box-shadow: 1px 1px 2px 0px var(--brown-primary); */
/* box-shadow: 3px 3px 6px 0px var(--brown-primary); */
/* box-shadow: 2px 2px 4px 0px var(--brown-primary); */
/* box-shadow: 0px 0px 10px 0px var(--brown-primary); */


      

      .features-item__icon {
        flex: 95%;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        /* border-radius: 0.7em; */


      }

      .features-item__info {
        font-size: .85rem;
        margin-top: 1em;
        flex: 5%;
        color: var(--white-primary);

      }
    }
  }
`;

export default Features;
