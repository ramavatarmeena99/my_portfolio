import React, { useState } from "react";
import Style from "./index.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Pdf from "../../Img/RESUME.pdf";
// import { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme } from "../Themes";

export default function Intro() {
  // const [theme, setTheme] = useState("light");
  const [isClose, setIsClose] = useState(true);
  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  const close = () => {
    setIsClose(true);
  };
  const open = () => {
    setIsClose(false);
  };
  const returnThisComponent = () => {
    setIsClose(true);
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
              <p className={Style.mainuconcept} onClick={returnThisComponent}>
                home
              </p>
            </a>
            <a href="#about">
              <p className={Style.mainuconcept} onClick={returnThisComponent}>
                about me
              </p>
            </a>
            <a href="#projects">
              <p className={Style.mainuconcept} onClick={returnThisComponent}>
                projects
              </p>
            </a>
            <a href="#contact">
              <p className={Style.mainuconcept} onClick={returnThisComponent}>
                contact
              </p>
            </a>
            <a href="#blogs">
              <p className={Style.mainuconcept} onClick={returnThisComponent}>
                blogs
              </p>
            </a>
            <button className={Style.mainuTheme} onClick={returnThisComponent}>
              Dark Mode
            </button>
          </div>

          <div className={Style.mainuBaar} onClick={close}>
            <IoMdClose className={Style.closeBtn} />
          </div>
        </>
      )}
{/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} > */}
<div className={Style.introBothSide}>
        <div className={Style.leftSideIntro}>
          <p className={Style.helloWord}>Hello, I’m</p>
          <h1 className={Style.me}> RAMAVATAR MEENA</h1>
          <h4>CREATIVE FRONT-END WEB DEVELOPER</h4>
          <div className={Style.myResume}>
            {/* <button className={Style.resume}>
            <a href = {Pdf} target = "_blank" 
              rel="noreferrer"
            
            > Download Resume</a>

              </button> */}
          </div>
          <div className={Style.icons}>
            <a
              href="https://github.com/ramavatarmeena99"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className={Style.github} />
            </a>
            <a href="https://twitter.com/Ramavat06439780">
              <AiOutlineTwitter className={Style.twitter} />
            </a>
          </div>
        </div>
      </div>
      <div className={Style.introRightSide}>
        <div className={Style.shapeForIntro}></div>
      </div>
{/* </ThemeProvider> */}
  
    </div>
  );
}
