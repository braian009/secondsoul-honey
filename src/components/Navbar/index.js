import * as React from "react";

import NavbarContainer from "./NavbarContainer";
import BurgerIcon from "./BurgerIcon";

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



export default Navbar;
