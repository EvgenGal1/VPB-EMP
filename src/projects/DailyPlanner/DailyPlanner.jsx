import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { ArrowAccordionFnComp } from "../../Components/ui/accordion/ArrowAccordion.jsx";

import { FullCalendarFC } from "./src/pages/FullCalendar/FullCalendarFC.jsx";
import { DayPlanToDo } from "./src/pages/DayPlanToDo/DayPlanToDo";

export const DailyPlanner = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div className="DailyPlanner accordion">
      <div className="DailyPlanner__descript">
        <h1
          className={openArrowAccord ? "_active" : ""}
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
      {/* <div
        className={`DailyPlanner__content--${
          openArrowAccord ? " openCont" : ""
        }`}
      >
        2
      </div> */}
      <hr />
      <div className="DailyPlanner__nav">
        <nav>
          <NavLink to="FullCalendar">FullCalendar</NavLink>
          <NavLink to="DayPlanToDo">DayPlanToDo</NavLink>
        </nav>
      </div>
      <hr />
      <div className="DailyPlanner__pages">
        <Routes>
          <Route path="FullCalendar" element={<FullCalendarFC />} />
          <Route path="DayPlanToDo" element={<DayPlanToDo />} />
        </Routes>
      </div>
    </div>
  );
};
//export {DailyPlanner}
