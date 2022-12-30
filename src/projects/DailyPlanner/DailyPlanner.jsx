import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { ArrowAccordionFnComp } from "../../Components/ui/accordion/ArrowAccordion.jsx";

import { FullCalendarFC } from "./src/pages/FullCalendar/FullCalendarFC.jsx";
import { DayPlanToDo } from "./src/pages/DayPlanToDo/DayPlanToDo";
import { MyDPTD } from "./src/pages/MyDPTD/MyDPTD.jsx";

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
        <div
          // className={openArrowAccord ? "openDop" : ""}
          className="openDop"
        >
          СДЕЛАНЫ на основе:
          <ul>
            <li>
              <a
                href="https://isamatov.com/react-fullcalendar-tutorial/#fromHistory"
                target="_blank"
                rel="noreferrer"
              >
                FullCalendar
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gjoyner09/daily-planner"
                target="_blank"
                rel="noreferrer"
              >
                Daily Planner App
              </a>
            </li>
            <li>
              <a
                href="/DailyPlanner/DayPlanToDo"
                target="_blank"
                rel="noreferrer"
              >
                MyDPTD
              </a>
            </li>
          </ul>
        </div>
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
          <NavLink to="MyDPTD">MyDPTD</NavLink>
        </nav>
      </div>
      <hr />
      <div className="DailyPlanner__pages">
        <Routes>
          <Route path="FullCalendar" element={<FullCalendarFC />} />
          <Route path="DayPlanToDo" element={<DayPlanToDo />} />
          <Route path="MyDPTD" element={<MyDPTD />} />
        </Routes>
      </div>
    </div>
  );
};
//export {DailyPlanner}
