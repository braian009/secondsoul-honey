import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-inner">
        <div>
          Developed by <b>Braian Yanquín</b>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  position: relative;
  width: 100%;
  margin-top: 4.5em;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
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

  .footer-inner {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5em;

    div {
      font-size: 0.9rem;
    }
  }
`;

export default Footer;
