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
          <ol>
            <li>
              Правки
              <ul>
                <li>Прописка всех title у значков</li>
                <li>Переименовка всех кнп.</li>
                <li>Стандарт стилей (цвета, размеры, отступы)</li>
                <li>Редактирование Списка Дел по click</li>
                <li>Добавлен ПОИСК в Списке Дел</li>
                <li>измен струк. render ToDoList (вернуть?)</li>
                <li>Нач. редакт. MyDPTD.Calendar.Modal</li>
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
