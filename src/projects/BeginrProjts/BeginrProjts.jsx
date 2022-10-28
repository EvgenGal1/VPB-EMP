import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { BegPrj_Modal } from "./src/pages/BegPrj_Modal";
import "./src/styles/BegPrj_Modal.scss";

import { BegPrj_Quiz } from "./src/pages/BegPrj_Quiz";
import "./src/styles/BegPrj_Quiz.scss";

import { BegPrj_Users } from "./src/pages/BegPrj_Users";
import "./src/styles/BegPrj_Users.scss";

export function BeginrProjts(props) {
  return (
    <div className="BeginrProjts">
      <div className="BeginrProjts__descript">
        <h1>НОВ.ПРОЕКТЫ BeginrProjts</h1>
        <p>BegPrj_Modal</p>
        <p>BegPrj_Quiz</p>
      </div>
      <hr />
      <div className="BeginrProjts__nav">
        <nav>
          <NavLink to="BegPrj_Modal">Modal</NavLink>
          <NavLink to="BegPrj_Quiz">Quiz</NavLink>
          <NavLink to="BegPrj_Users">Users</NavLink>
        </nav>
      </div>
      <hr />
      <div className="BeginrProjts__pages">
        <Routes>
          <Route path="BegPrj_Modal" element={<BegPrj_Modal />} />
          <Route path="BegPrj_Quiz" element={<BegPrj_Quiz />} />
          <Route path="BegPrj_Users" element={<BegPrj_Users />} />
        </Routes>
      </div>
    </div>
  );
}
