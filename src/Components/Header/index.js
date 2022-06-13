import React from "react";
import Style from "./index.module.css";
import logo from "../../Img/ramavatarmeena.png";
export default function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.leftHeader}>
        <img className={Style.logoImg} alt="logo" src={logo} />
      </div>
      <div className={Style.rightHeader}>
        <div className={Style.mainuDiv}>
          <a href="#home">
            <p className={Style.mainuBaar}>home</p>
          </a>
          <a href="#about">
            <p className={Style.mainuBaar}>about me</p>
          </a>
          <a href="#projects">
            <p className={Style.mainuBaar}>projects</p>
          </a>
          <a href="#contact">
            <p className={Style.mainuBaar}>contact</p>
          </a>
          <a href="#blogs">
            <p className={Style.mainuBaar}>blogs</p>
          </a>
          <button className={Style.theme}>Dark Mode</button>
        </div>
      </div>
    </div>
  );
}
