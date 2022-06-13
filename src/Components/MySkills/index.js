import React from "react";
import Style from "./index.module.css";
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
export default function MySkills() {
  return (
    <div className={Style.mySkills}>
      <h1 className={Style.skills}>My Skillsets</h1>
      <div className={Style.skillsetsIcons}>
        <DiJavascript className={Style.icon} />
        <SiJavascript className={Style.icon} />
        <FaReact className={Style.icon} />
      </div>
    </div>
  );
}
