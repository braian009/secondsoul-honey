import * as React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="nav-inner">
        <div className="nav-brand">SS.</div>
        <div className="nav-menu">
          <ul className="nav-submenu">
            <li>about</li>
            <li>our principles</li>
            <li>products</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5em 2em;
  background-color: hsla(0, 0%, 0%, 1);
  z-index: 10;

  .nav-inner {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;

    .nav-brand {
      font-size: 2rem;
    }

    .nav-submenu {
      padding: 0;
      margin: 0;
      display: flex;
      list-style-type: none;

      li {
        padding: .5em .8em;
      }

      li + li {
        margin-left: 1em;
      }
    }
  }
`;

export default Navbar;
