import Style from "./index.module.css";
import logo from "../../Img/logo.png";
export default function Header() {
const darkModeAlert = () =>{
  alert("still working on it")
}
  return (

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

<button onClick={darkModeAlert} className={Style.theme}>dark mode</button>
          </div>
        </div>
      </div>

  );
}
