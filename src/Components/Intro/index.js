import React, { useState } from "react";
import Style from "./index.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export default function Intro() {
  const [isClose, setIsClose] = useState(true);

  const close = () => {
    setIsClose(true);
  };
  const open = () => {
    setIsClose(false);
  };
  return (
    <div className={Style.intro} id={"home"}>
      {isClose ? (
        <div className={Style.mainuBaar} onClick={open}>
          <FiMenu className={Style.openBtn} />
        </div>
      ) : (
        <>
          <div className={Style.mainuTitle}>
            <a href="#home">
              <p className={Style.mainuconcept}>home</p>
            </a>
            <a href="#about">
              <p className={Style.mainuconcept}>about me</p>
            </a>
            <a href="#projects">
              <p className={Style.mainuconcept}>projects</p>
            </a>
            <a href="#contact">
              <p className={Style.mainuconcept}>contact</p>
            </a>
            <a href="#blogs">
              <p className={Style.mainuconcept}>blogs</p>
            </a>
            <button className={Style.mainuTheme}>Dark Mode</button>
          </div>

          <div className={Style.mainuBaar} onClick={close}>
            <IoMdClose className={Style.closeBtn} />
          </div>
        </>
      )}

      <div className={Style.introBothSide}>
        <div className={Style.leftSideIntro}>
          <p className={Style.helloWord}>Hello, I’m</p>
          <h1> RAMAVATAR MEENA</h1>
          <h4>CREATIVE FRONT-END WEB DEVELOPER</h4>
          <div className={Style.myResume}>
            <button className={Style.resume}>Download Resume</button>
          </div>
          <div className={Style.icons}>
            <a
              href="https://github.com/ramavatarmeena99"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className={Style.github} />
            </a>
            <AiOutlineTwitter className={Style.twitter} />
          </div>
        </div>
      </div>
      <div className={Style.introBothSide}>RAMAVATAR MEENA</div>
    </div>
  );
}
