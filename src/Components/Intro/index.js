import React from "react";
import Style from "./index.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Intro() {
  return (
    <div className={Style.intro} id={"home"}>
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
