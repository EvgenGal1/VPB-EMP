import React from "react";

import { BegPrj_Modal } from "./src/pages/BegPrj_Modal";
import "./src/styles/BegPrj_Modal.scss";

export function BeginrProjts(props) {
  return (
    <div className="BeginrProjts">
      <div className="BeginrProjts__descript"></div>
      <div className="BeginrProjts__content">
        <BegPrj_Modal />
      </div>
    </div>
  );
}
