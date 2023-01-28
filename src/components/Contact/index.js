import * as React from "react";

import ContactContainer from "./ContactContainer";

import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";

const Contact = () => {
  return (
    <ContactContainer id="contact">
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


export default Contact;
