import * as React from "react";
import styled from "styled-components";

import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const menu = document.querySelector(".menu-list");

    if (isActive) {
      menu.style.setProperty("height", `50vh`);
      document.onclick = () => {
        setIsActive(false);
      };
      document.body.style.overflowY = "hidden";
    } else {
      menu.style.setProperty("height", "0px");
      document.body.style.overflowY = "visible";
    }
  }, [isActive]);
  return (
    <NavbarContainer>
      <div className="nav-inner">
        <div className={`nav-menu ${isActive ? "is-active" : ""}`}>
          <ul className="menu-list">
            <li>
              <Link to="#about" smooth>
                about us
              </Link>
            </li>
            <li>
              <Link to="#values" smooth>
                our values
              </Link>
            </li>
            <li>
              <Link to="#products" smooth>
                products
              </Link>
            </li>
            <li>
              <Link to="#features" smooth>
                features
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth>
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="nav-icon"
          onClick={(e) => {
            e.stopPropagation();
            setIsActive(!isActive);
            console.log("button");
          }}
        >
          <BurgerIcon isActive={isActive} />
        </div>
      </div>
    </NavbarContainer>
  );
};

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
      flex: 1;
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
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      list-style-type: none;

      background-color: var(--black-secondary);

      transition: height 0.2s ease-out;
      overflow: hidden;
      height: 0;

      li {
        font-size: 1.1rem;
        width: 100%;
        text-align: center;
        margin: 0.25em 0;
        text-shadow: 2px 2px 8px var(--white-opaque);

        a {
          width: 18em;
          margin: 0 auto;
          color: var(--white-secondary);
          display: block;
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
        width: 32em;
        margin-left: auto;
        margin-right: 1.5em;
        flex-direction: row;
        height: initial !important;
        background-color: transparent;
        padding: 0.5em;
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
          text-shadow: 3px 5px 3px var(--black-secondary);

          a {
            width: initial;
          }
        }
      }
    }
  }
`;

const BurgerIcon = ({ isActive }) => {
  return (
    <BurgerIconContainer className={`${isActive ? "is-active" : ""}`}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </BurgerIconContainer>
  );
};

const BurgerIconContainer = styled.div`
  .line {
    width: 30px;
    height: 5px;
    background-color: var(--white-secondary);
    box-shadow: 4px 8px 4px var(--black-secondary);
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
    border-radius: 0.5em;
  }

  .line:nth-child(1) {
    margin-top: 0;
  }

  .line:nth-child(3) {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &.is-active .line:nth-child(2) {
    opacity: 0;
  }

  &.is-active .line:nth-child(1) {
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  &.is-active .line:nth-child(3) {
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }
`;

export default Navbar;
