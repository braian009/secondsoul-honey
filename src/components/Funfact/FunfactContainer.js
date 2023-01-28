import styled from "styled-components";


const FunfactContainer = styled.div`
  width: 19em;
  height: 12em;

  .funfact-inner {
    position: relative;
    width: 100%;
    height: 100%;

    .funfact-button {
      display: flex;
      align-items: center;
      border-radius: 50%;

      position: absolute;
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
      font-size: 0.8rem;

      position: relative;
      top: 2.5em;
      padding: 1em;
      padding-right: 2.5em;

      opacity: 0;
      transform: translate(12em, 0);
      transition: all 0.3s ease-out;

      background-image: linear-gradient(
        to right,
        var(--black-primary),
        transparent
      );

      h4 {
        margin-bottom: 0.5em;
      }

      &.shown {
        transform: translate(0, 0);
        opacity: 1;
      }

      &::after {
        content: "";
        display: block;
        width: 2px;
        height: 100%;
        background-color: var(--brown-secondary);
        position: absolute;
        top: 0;
        left: 0;

        box-shadow: 0 0 78.9264px var(--brown-secondary),
            0 0 45.1008px var(--brown-secondary),
            0 0 26.3088px var(--brown-secondary),
            0 0 13.1544px var(--brown-secondary),
            0 0 3.7584px var(--brown-secondary),
            0 0 1.8792px var(--brown-secondary);
      }
    }
  }
`;

export default FunfactContainer;