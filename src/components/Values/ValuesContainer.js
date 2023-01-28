import styled from "styled-components";

const ValuesContainer = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 3.5em 1.5em 3.5em;

  .values-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 1em;

    width: 100%;
    max-width: calc(420px + 6em);
    padding: 0 1em;
    margin: 0 auto;

    .values-title {
      text-align: center;
      margin-bottom: 0.5em;
    }

    .values-item {
      padding: 1em;
      border-radius: 0.5em;

      .values-item__title {
        position: relative;

        .values-item__line {
          display: inline-block;
          position: absolute;
          top: 35%;

          height: 1px;
          width: 60%;
          margin-left: auto;

          border-bottom: 1px solid var(--brown-primary);
          box-shadow: 0 0 78.9264px var(--brown-primary), 0 0 45.1008px var(--brown-primary), 0 0 26.3088px var(--brown-primary), 0 0 13.1544px var(--brown-primary), 0 0 3.7584px var(--brown-primary), 0 0 1.8792px var(--brown-primary);
        }
      }

      h4 {
        display: inline-block;
        margin-bottom: 1em;
        text-align: center;
        margin-right: 0.5em;
      }
      p {
        text-align: center;
        color: var(--white-secondary);
      }
    }
  }

  @media (min-width: 35em) {
    .values-inner {
      padding: 0;
    }
  }

  @media (min-width: 50em) {
    .values-inner {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 1080px;

      .values-title {
        grid-column: span 3;
      }

      .values-item {
        grid-column: span 1;
      }
    }
  }
`;


export default ValuesContainer;