import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { UlbiTV_MiniDrADr } from "./src/pages/UlbiTV_MiniDrADr";
import "./src/styles/UlbiTV_MiniDrADr.scss";

// import { UlbiTV_DrADr } from "./src/pages/UlbiTV_DrADr";
// import "./src/styles/UlbiTV_DrADr.scss";

export function UlbiTV(props) {
  return (
    <div className="UlbiTV">
      <div className="UlbiTV__descript">
        <h1>НОВ.ПРОЕКТЫ ExpsMiniProjs</h1>
        <p>BegPrj_Modal</p>
        <p>BegPrj_Quiz</p>
      </div>
      {/* <div className="UlbiTV__content">
        <BegPrj_Modal />
        <BegPrj_Quiz />
      </div> */}
      <div className="UlbiTV__nav">
        <nav>
          <NavLink to="UlbiTV_MiniDrADr">UlbiTV_MiniDrADr</NavLink>
          {/* <NavLink to="UlbiTV_DrADr">UlbiTV_DrADr</NavLink> */}
        </nav>
      </div>
      <hr />
      <div className="UlbiTV__pages">
        <Routes>
          222
          <Route path="UlbiTV_MiniDrADr" element={<UlbiTV_MiniDrADr />} />
          {/* <Route path="UlbiTV_DrADr" element={<UlbiTV_DrADr />} /> */}
          333 444
        </Routes>
      </div>
    </div>
  );
}
