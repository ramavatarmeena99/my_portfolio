import React from "react";
import Style from "./index.module.css";
export default function AboutMe() {
  return (
    <div className={Style.aboutMe} id="about">
      <h1 className={Style.myInfo}>About Me</h1>

      <div className={Style.parellogram}></div>
    </div>
  );
}
