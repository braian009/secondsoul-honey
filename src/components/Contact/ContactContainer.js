import styled from "styled-components";

const ContactContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3.5em 1.5em 3.5em;

  .contact-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    place-items: center;
    gap: 1.5em;

    width: 100%;
    max-width: 920px;
    margin: 0 auto;

    .contact-title {
      text-align: center;
    }

    .contact-links {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      gap: 1em;
      justify-items: center;

      width: 100%;
      max-width: 620px;
      margin: 0 auto;

      .contact-links__item {
        font-size: 0.9rem;
      }

      @media (min-width: 35em) {
        grid-template-columns: 1fr 1fr;
        justify-items: end;

        .contact-links__item {
          grid-column: span 1;
        }
      }
    }

    .contact-links__item {
      display: flex;
      align-items: center;
      width: 18em;

      span {
        margin-left: 1em;
      }
    }
  }
`;

export default ContactContainer;