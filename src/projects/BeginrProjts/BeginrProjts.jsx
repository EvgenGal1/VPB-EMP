import React from "react";

import { BegPrj_Quiz } from "./src/pages/BegPrj_Quiz";
import "./src/styles/BegPrj_Quiz.scss";

export function BeginrProjts(props) {
  return (
    <div className="BeginrProjts">
      {/* <div className="BeginrProjts__descript"></div> */}
      <div className="BeginrProjts__content">
        <BegPrj_Quiz />
      </div>
    </div>
  );
}
