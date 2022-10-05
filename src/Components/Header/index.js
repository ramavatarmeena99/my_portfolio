import Style from "./index.module.css";
import logo from "../../Img/ramavatarmeena.png";
// import {ThemeProvider} from "styled-components";
// import { useState } from "react";
// import { darkTheme, lightTheme } from "../Themes";
// import { GlobalStyles } from "../globalStyles";
// import Toggle from "../Toggler";
export default function Header() {
  
  // const [theme, setTheme] = useState("light");
  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };


  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    //         <GlobalStyles/>

      <div className={Style.header}>
        <div className={Style.leftHeader}>
          <a href="#home">
            <img className={Style.logoImg} alt="logo" src={logo} />
          </a>
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
            {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
<button className={Style.theme}>dark mode</button>
          </div>
        </div>
      </div>
    // </ThemeProvider>
  );
}
