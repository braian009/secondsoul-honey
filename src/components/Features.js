import * as React from "react";
import styled from "styled-components";
import featureItems from "./featureItems";

const Features = () => {
  return (
    <FeaturesContainer id="features">
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
    padding: 0 1em;
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
      position: relative;
        display: flex;
        flex-direction: column;
      height: 22em;
      width: 100%;
      padding: 1em;

      max-width: 520px;
      margin: 0 auto;


      background: none;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--brown-secondary);
        position: absolute;
        bottom: 0;
        left: 0;

        box-shadow: 0 0 78.9264px var(--brown-secondary),
          0 0 45.1008px var(--brown-secondary),
          0 0 26.3088px var(--brown-secondary),
          0 0 13.1544px var(--brown-secondary),
          0 0 3.7584px var(--brown-secondary),
          0 0 1.8792px var(--brown-secondary);
      }
      

      .features-item__icon {
        flex: 95%;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 0.7em;
        border: 2px solid var(--brown-secondary);

        


        


      }

      .features-item__info {
      
        margin-top: 1em;
        flex: 5%;

        p {
            font-size: .85rem;
        color: var(--white-secondary);


        }
        

      }
    }
  }
`;

export default Features;
