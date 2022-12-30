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
          <div>
            Проект на основе{" "}
            <span>
              <a
                href="https://github.com/gjoyner09/daily-planner"
                target="_blank"
                rel="noreferrer"
              >
                Daily Planner{" "}
              </a>
            </span>
          </div>
          <p></p>
          <ol>
            <li>
              Устан доп.зависимостей
              <ul>
                <li>npm i react-modal</li>
                <li>npm i styled-components @types/styled-components</li>
              </ul>
            </li>
            <li>
              Созд. 2 Основ Компонента
              <ul>
                <li>Todo (Лист заданий на styled-components)</li>
                <li>
                  Calendar (Календарб на FullCalendar и styled-components)
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
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
