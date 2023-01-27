import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Question } from "../assets/icons/question.svg";

const factList = [
  "Honey never spoils. Archaeologists have found pots of honey in Egyptian tombs dating back to thousands of years ago that were still edible.",
  "Honey is the only food that includes all the substances necessary to sustain life, including enzymes, vitamins, minerals, and water.",
  "Honey bees fly at 15 miles per hour. A bee will visit 50-100 flowers during a collection trip.",
  "Honey is the only food that is made without destroying any kind of life. Bees collect nectar, not destroying the flower, they transform nectar into honey within their bodies.",
  "Honey contains antioxidants and has antibacterial properties.",
];

const Funfact = () => {
  console.log("facts render");
  const [display, setDisplay] = React.useState(false);
  const [fact, setFact] = React.useState(
    factList[Math.floor(Math.random() * factList.length)]
  );

  const closeOnScroll = () => {
    if (display) {
      setDisplay(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", closeOnScroll);

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [display]);

  const handleShowFact = (e) => {
    setDisplay(!display);
    e.preventDefault();
  };
  return (
    <FunfactContainer>
      <div className="funfact-inner">
        <div className="funfact-button" onClick={handleShowFact}>
          <Question />
        </div>
        <div className={`funfact-text ${display ? "shown" : ""}`}>
          <p>Fun Fact:</p>
          <p>{fact}</p>
        </div>
      </div>
    </FunfactContainer>
  );
};

const FunfactContainer = styled.div`
  width: 20em;
  height: 12em;

  .funfact-inner {
    position: relative;
    width: 100%;
    height: 100%;

    .funfact-button {
      position: absolute;
      color: white;
      outline: none;
      display: flex;
      align-items: center;
      border-radius: 50%;

      bottom: 1.5em;
      right: 0;
      z-index: 10;

    

      svg {
        width: 40px;
        height: 40px;
        filter: drop-shadow(4px 8px 4px var(--black-primary));
        fill: var(--white-secondary);
        transition: all 0.3s ease-out;
        border-radius: 50%;
        cursor: pointer;


        &:hover {
          fill: var(--brown-secondary);
        }

      }
    }

    .funfact-text {
      font-size: 0.9rem;
      transform: translate(12em, 0);
      opacity: 0;
      transition: all 0.3s ease-out;
      position: relative;
      top: 2.5em;
      padding: 1em;
      background-image: linear-gradient(
        to right,
        hsla(0, 0%, 0%, 0.7),
        transparent
      );
      border-radius: 0.7em;

      &.shown {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }
`;

export default Funfact;
