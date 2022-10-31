import React from "react";
import Style from "./index.module.css";

export default function Footer() {
  return (
    <div className={Style.footer}>
      {/* <div className={Style.logoForFooter}>
        <img className={Style.logoFooterImg} alt="logo" src={logo} />
      </div> */}
      <p>© 2021 Designed By Ramavatarmeena</p>
    </div>
  );
}
