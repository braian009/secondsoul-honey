import styled from "styled-components";

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
      display: block;
  
      width: 30px;
      height: 5px;
      margin: 8px auto;
  
      background-color: var(--white-secondary);
      border-radius: 0.5em;
      box-shadow: 4px 6px 4px var(--black-secondary);
  
      transition: all 0.3s ease-in-out;
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

export default BurgerIcon;