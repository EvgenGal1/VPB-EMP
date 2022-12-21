import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { ArrowAccordionFnComp } from "../../Components/ui/accordion/ArrowAccordion.jsx";

// import { FormMN } from "./src/pages/FormMN/FormMN";
// import { FormDoc } from "./src/pages/FormDoc/FormDoc";

export const DailyPlanner = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div className="DailyPlanner accordion">
      <div className="DailyPlanner__descript">
        <h1
          lassName={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          ПРОЕКТЫ с ЕЖЕДНЕВНИКОМ
        </h1>
        {/* <div className={openArrowAccord ? "openDop" : ""}>1</div> */}
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      {/* <div className="DailyPlanner__content">Daily Planner C</div> */}
      <div
        className={`DailyPlanner__content--${
          openArrowAccord ? " openCont" : ""
        }`}
      >
        2
      </div>
      <hr />
      <div className="DailyPlanner__nav">
        <nav>
          {/* <NavLink to="FormMN">FormMN</NavLink>
        <NavLink to="FormDoc">FormDoc</NavLink> */}
        </nav>
      </div>
      <hr />
      <div className="DailyPlanner__pages">
        {/* <Routes>
        <Route path="FormMN" element={<FormMN />} />
        <Route path="FormDoc" element={<FormDoc />} />
      </Routes> */}
      </div>
    </div>
  );
};
//export {DailyPlanner}
