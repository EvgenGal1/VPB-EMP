import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { UlbiTV_MiniDrADr } from "./src/pages/UlbiTV_MiniDrADr";
import "./src/styles/UlbiTV_MiniDrADr.scss";

import { UlbiTV_DrADr } from "./src/pages/UlbiTV_DrADr";
import "./src/styles/UlbiTV_DrADr.scss";

export function UlbiTV(props) {
  return (
    <div className="UlbiTV">
      <div className="UlbiTV__descript">
        <h1>НОВ.ПРОЕКТЫ UlbiTV</h1>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=FgvJH91a5K0&list=RDLVFgvJH91a5K0"
              target="_blank"
              rel="noreferrer"
              // style={{ textDecoration: "lineThrough" }} // ??? не раб
              style={{ textDecoration: "underline" }}
            >
              MiniDrADr
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=RPtDuVba1XQ&list=RDLVFgvJH91a5K0"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline" }}
            >
              DrADr
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="UlbiTV__nav">
        <nav>
          <NavLink to="UlbiTV_MiniDrADr">MiniDrADr</NavLink>
          <NavLink to="UlbiTV_DrADr">DrADr</NavLink>
        </nav>
      </div>
      <hr />
      <div className="UlbiTV__pages">
        <Routes>
          <Route path="UlbiTV_MiniDrADr" element={<UlbiTV_MiniDrADr />} />
          <Route path="UlbiTV_DrADr" element={<UlbiTV_DrADr />} />
        </Routes>
      </div>
    </div>
  );
}
