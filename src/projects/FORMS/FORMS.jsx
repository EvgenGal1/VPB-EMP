import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { Form } from "./src/pages/Form";

const FORMS = () => {
  return (
    <div className="FORMS">
      <div className="FORMS__descript">FORMS D</div>
      <div className="FORMS__content">FORMS C</div>
      <hr />
      <div className="FORMS__nav">
        <nav>
          <NavLink to="Form">Form</NavLink>
          {/* <NavLink to="Form">Form</NavLink> */}
        </nav>
      </div>
      <hr />
      <div className="FORMS__pages">
        <Routes>
          <Route path="Form" element={<Form />} />
          {/* <Route path="Form" element={<Form />} /> */}
        </Routes>
      </div>
    </div>
  );
};
export { FORMS };
