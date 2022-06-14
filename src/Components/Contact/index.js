import React from "react";
import Style from "./index.module.css";
import { FaHandshake } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={Style.contact} id={"contact"}>
      <h1 className={Style.contactinfo}>Get In Touch</h1>
      <div className={Style.ContactDetails}>
        <div className={Style.forLeft}>
          <div className={Style.leftSide}>
            <FaHandshake className={Style.handshake} />
            <h1 className={Style.thanksYou}>Thanks You</h1>
            <p className={Style.anyQueries}>Do You Have Any Queries?</p>
          </div>
        </div>
        <div className={Style.forRight}>
          <div className={Style.rightSide}>
            <div className={Style.top}>
              <div className={Style.right}>
                <p className={Style.styleForContactDetails}>EMAIL</p>
                <h1 className={Style.personalDetails}>
                  meenaramavatar48@gmail.com
                </h1>
              </div>
              <div className={Style.right}>
                <p className={Style.styleForContactDetails}>PHONE</p>
                <h1 className={Style.personalDetails}>+91 8824316660</h1>
              </div>
              <div className={Style.right}>
                <p className={Style.styleForContactDetails}>ON THE WEB </p>

                <div className={Style.left}>
                  <a
                    className={Style.linkedin}
                    href="https://www.linkedin.com/in/ramavatar-meena-65b07b204/"
                  >
                    <h1 className={Style.link}>linkedin </h1>
                  </a>
                  <h1 className={Style.arrow}>|</h1>
                  <a
                    className={Style.twitter}
                    href="https://twitter.com/Ramavat80153084"
                  >
                    <h1 className={Style.link}>twitter</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
