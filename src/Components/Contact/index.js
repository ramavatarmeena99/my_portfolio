import React from "react";
import Style from "./index.module.css";
import { FaHandshake } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

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
              <div className={Style.left}>
                <p>Email</p>
                <input type="email" placeholder="example@gmail.com"></input>
              </div>
              <div className={Style.right}>
                <p>Name</p>
                <input type="text" placeholder="Ramavatar Meena"></input>
              </div>
            </div>
            <div className={Style.buttom}>
              <p>Message</p>
              <textarea
                rows="10"
                cols="50"
                name="Reply"
                form="useform"
                placeholder="Hey there!"
              ></textarea>
            </div>
            <div className={Style.submitButton}>
              <button className={Style.submit}>
                <RiSendPlaneFill />
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
