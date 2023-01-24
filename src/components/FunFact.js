import * as React from "react";
import styled from "styled-components";

const factList = [
  "Honey never spoils. Archaeologists have found pots of honey in Egyptian tombs dating back to thousands of years ago that were still edible.",
  "Honey is the only food that includes all the substances necessary to sustain life, including enzymes, vitamins, minerals, and water.",
  "Honey bees fly at 15 miles per hour. A bee will visit 50-100 flowers during a collection trip.",
  "Honey is the only food that is made without destroying any kind of life. Bees collect nectar, not destroying the flower, they transform nectar into honey within their bodies.",
  "Honey contains antioxidants and has antibacterial properties.",
];

const Funfact = () => {
  const [display, setDisplay] = React.useState(false);
  const [fact, setFact] = React.useState(factList[Math.floor(Math.random() * factList.length)]);

  const handleShowFact = (e) => {
    setDisplay(!display);
    e.preventDefault();
  };
  return (
    <FunfactContainer>
      <div className="funfact-inner">
        <div className="funfact-button" onClick={handleShowFact}>
          ?
        </div>
        <div className={`funfact-text ${display ? 'shown' : ''}`}>
          <p>Fun Fact:</p>
          <p>{fact}</p>
        </div>
      </div>
    </FunfactContainer>
  );
};

const FunfactContainer = styled.div`
  width: 20em;
  height: 15em;
  padding: 1em;

  .funfact-inner {
    position: relative;
    width: 100%;
    height: 100%;

    .funfact-button {
      position: absolute;
      background-color: black;
      color: white;
      outline: none;
      border-radius: 20px;
      padding: 0.5em 0.8em;

      top: 0;
      right: 0;
      z-index: 10;
    }

    .funfact-text {
      transform: translate(12em, 0);
      opacity: 0;
      transition: all 0.2s ease-out;
      position: relative;
      top: 2.5em;
      padding: 1em;
      background-image: linear-gradient(to right, hsla(0, 0%, 0%, 0.5), transparent);

      &.shown {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }
`;

export default Funfact;
