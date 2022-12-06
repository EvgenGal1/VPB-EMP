import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { FormMN } from "./src/pages/FormMN";

const FORMS = () => {
  return (
    <div className="FORMS">
      <div className="FORMS__descript">FORMS D</div>
      <div className="FORMS__content">FORMS C</div>
      <hr />
      <div className="FORMS__nav">
        <nav>
          <NavLink to="FormMN">FormMN</NavLink>
          {/* <NavLink to="Form">Form</NavLink> */}
        </nav>
      </div>
      <hr />
      <div className="FORMS__pages">
        <Routes>
          <Route path="FormMN" element={<FormMN />} />
          {/* <Route path="Form" element={<Form />} /> */}
        </Routes>
      </div>
    </div>
  );
};
export { FORMS };
