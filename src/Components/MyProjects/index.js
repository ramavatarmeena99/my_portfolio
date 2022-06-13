import React, { Fragment } from "react";
import SameComponentUse from "../SameComponentUse";
import Style from "./index.module.css";

import { data } from "../../data";

export default function MyProjects() {
  return (
    <div className={Style.myProjects}>
      <h1 className={Style.sideProjects} id={"projects"}>
        Side Projects
      </h1>
      {data.map((_, index) => {
        return (
          <Fragment key={index}>
            <SameComponentUse {..._} />;
          </Fragment>
        );
      })}
    </div>
  );
}
