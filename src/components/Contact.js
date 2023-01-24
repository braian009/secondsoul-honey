import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";

const Contact = () => {
  return (
    <ContactContainer>
      <div className="contact-inner">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-links">
          <div className="contact-links__item">
            <Mail height="55px" width="55px" />
            <span>secondsoulhny@email.com</span>
          </div>
          <div className="contact-links__item">
            <Facebook height="55px" width="55px" />
            <span>/secondsoul-honey</span>
          </div>
          <div className="contact-links__item">
            <Twitter height="55px" width="55px" />
            <span>@secondsoulhoney</span>
          </div>
          <div className="contact-links__item">
            <Instagram height="55px" width="55px" />
            <span>@secondsoulhoney</span>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3.5em 1.5em 3.5em;

  .contact-inner {
    display: grid;
    gap: 1.5em;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    width: 100%;
    margin: 0 auto;
    max-width: 920px;

    .contact-title {
      text-align: center;
    }

    .contact-links {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      gap: 1em;
      width: 100%;
      max-width: 620px;
      margin: 0 auto;
      justify-items: center;
      


      @media (min-width: 35em) {
        grid-template-columns: 1fr 1fr;

        .contact-links__item {
          grid-column: span 1;
        }
/* 
        .contact-links__item:nth-child(2) {
          justify-self: end;
        } */

      }
    }

    .contact-links__item {
      display: flex;
      align-items: center;
      width: 17em;

      span {
        margin-left: 1em;
      }
    }
  }
`;

export default Contact;
