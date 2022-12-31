import React, { useState } from "react";

import { ArrowAccordionFnComp } from "../../../../../Components/ui/accordion/ArrowAccordion.jsx";

import Todo from "./ToDo.jsx";
import Calendar from "./Calendar.jsx";

import "./MyDPTD.scss";

export const MyDPTD = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div className="MyDPTD accordion">
      <div className="MyDPTD__descript">
        <h1
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          MyDPTD
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
          <div>
            Проект на основе{" "}
            <span>
              <a
                href="/DailyPlanner/DayPlanToDo"
                target="_blank"
                rel="noreferrer"
              >
                DayPlanToDo
              </a>
            </span>
            . Установка такая же.
          </div>
          {/* <ol>
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
          </ol> */}
          <br />
          Добавлено Редактирование Списка Дел
        </div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className="MyDPTD__content-- openCont"
        // className={`MyDPTD__content--${
        //   openArrowAccord ? " openCont" : ""
        // }`}
      >
        <Todo></Todo>
        <Calendar></Calendar>
      </div>
    </div>
  );
};
//export {MyDPTD}
