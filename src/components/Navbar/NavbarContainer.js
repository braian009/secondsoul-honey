import styled from "styled-components";


const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 0;
  z-index: 20;

  .nav-inner {
    position: relative;

    width: 100%;
    max-width: 1080px;
    margin: 0 auto;

    .nav-icon {
      position: absolute;
      top: 1.5em;
      right: 1.5em;
      z-index: 30;
    }

    .nav-menu {
      position: relative;

      &.is-active .menu-list {
        border-bottom: 2px solid var(--brown-secondary);
      }
    }

    .menu-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      height: 0;
      margin: 0;
      padding: 0;
      list-style-type: none;

      background-color: var(--black-secondary);

      transition: height 0.2s ease-out;
      overflow: hidden;

      li {
        font-size: 1.1rem;
        width: 100%;
        text-align: center;
        margin: 0.25em 0;
        text-shadow: 2px 2px 6px var(--white-opaque);

        a {
          display: block;
          width: 18em;
          margin: 0 auto;
          color: var(--white-secondary);
          padding: 0.75em 0.8em;
          cursor: pointer;
          transition: all 0.3s ease-out;

          &:hover,
          &:focus {
            transform: scale(1.05);
            color: var(--brown-primary);
          }
        }
      }
    }

    @media (min-width: 45em) {
      .nav-icon {
        display: none;
      }

      .menu-list {
        height: initial !important;
        width: 34em;
        margin-left: auto;
        margin-right: 1.5em;
        padding: 0.5em;

        flex-direction: row;
        background-color: transparent;
        overflow: initial;

        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: var(--black-secondary);
          position: absolute;
          bottom: 0;
          left: 0;

          box-shadow: 0 0 78.9264px var(--black-secondary),
            0 0 45.1008px var(--black-secondary),
            0 0 26.3088px var(--black-secondary),
            0 0 13.1544px var(--black-secondary),
            0 0 3.7584px var(--black-secondary),
            0 0 1.8792px var(--black-secondary);
        }

        &::after {
          content: "";
          display: block;
          width: 1px;
          height: 100%;
          background-color: var(--black-secondary);
          position: absolute;
          top: 0;
          right: 0;

          box-shadow: 0 0 78.9264px var(--black-secondary),
            0 0 45.1008px var(--black-secondary),
            0 0 26.3088px var(--black-secondary),
            0 0 13.1544px var(--black-secondary),
            0 0 3.7584px var(--black-secondary),
            0 0 1.8792px var(--black-secondary);
        }

        li {
          font-size: 0.9rem;
          margin: 0;
          text-shadow: 3px 3px 2px var(--black-primary);

          a {
            width: initial;
          }
        }
      }
    }
  }
`;

export default NavbarContainer;