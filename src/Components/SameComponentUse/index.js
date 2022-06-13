import React from "react";
import Style from "./index.module.css";
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

export default function SameComponentUse(props) {
  return (
    <div className={Style.sameComponentUse}>
      <div
        style={{
          width: "90%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className={Style.left}>
          <h1 className={Style.projectName}>{props.projectName}</h1>
          <p className={Style.aboutForProject}>{props.aboutForProject}</p>
          <div className={Style.possisonForIcons}>
            <SiJavascript className={Style.icon} />
            <DiJavascript className={Style.icon} />
            <DiCss3 className={Style.icon} />
          </div>
          <div className={Style.projectLinks}>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className={Style.deployeSite}>Live Demo</button>
            </a>

            <a href={props.projectGithubLink} target="_blank" rel="noreferrer">
              <AiFillGithub className={Style.github} />
            </a>
          </div>
        </div>
        <div className={Style.right}>
          <div className={Style.new}>
            <img
              className={Style.projectImg}
              src={props.projectImg}
              alt="projects"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
