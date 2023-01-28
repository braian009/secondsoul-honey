import * as React from "react";

import FunfactContainer from "./FunfactContainer";

import { ReactComponent as Question } from "../../assets/icons/question.svg";

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
          <h4>Fun Fact:</h4>
          <p>{fact}</p>
        </div>
      </div>
    </FunfactContainer>
  );
};


export default Funfact;
