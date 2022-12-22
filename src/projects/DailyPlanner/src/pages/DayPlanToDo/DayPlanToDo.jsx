import React, { useState } from "react";

import { ArrowAccordionFnComp } from "../../../../../Components/ui/accordion/ArrowAccordion.jsx";

import Todo from "./ToDo.jsx";
import Calendar from "./Calendar";

import "./DayPlanToDo.scss";

export const DayPlanToDo = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div className="DayPlanToDo accordion">
      <div className="DayPlanToDo__descript">
        <h1
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          DayPlanToDo
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
          <ul>
            <li>npm i styled-components @types/styled-components</li>
            <li>react-modal</li>
          </ul>
        </div>
        {/* <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        /> */}
      </div>
      <div
        className="DayPlanToDo__content-- openCont"
        // className={`DayPlanToDo__content--${
        //   openArrowAccord ? " openCont" : ""
        // }`}
      >
        <Todo></Todo>
        <Calendar></Calendar>
      </div>
    </div>
  );
};
//export {DayPlanToDo}
