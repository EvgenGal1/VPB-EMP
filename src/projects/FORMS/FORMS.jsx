import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { FormMN } from "./src/pages/FormMN";
import { FormDoc } from "./src/pages/FormDoc";

const FORMS = () => {
  return (
    <div className="FORMS">
      <div className="FORMS__descript">FORMS D</div>
      <div className="FORMS__content">FORMS C</div>
      <hr />
      <div className="FORMS__nav">
        <nav>
          <NavLink to="FormMN">FormMN</NavLink>
          <NavLink to="FormDoc">FormDoc</NavLink>
        </nav>
      </div>
      <hr />
      <div className="FORMS__pages">
        <Routes>
          <Route path="FormMN" element={<FormMN />} />
          <Route path="FormDoc" element={<FormDoc />} />
        </Routes>
      </div>
    </div>
  );
};
export { FORMS };
