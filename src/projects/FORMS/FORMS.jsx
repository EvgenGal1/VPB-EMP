import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { ArrowAccordionFnComp } from "../../Components/ui/accordion/ArrowAccordion.jsx";

import { FormMN } from "./src/pages/FormMN/FormMN";
import { FormDoc } from "./src/pages/FormDoc/FormDoc";

export const FORMS = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div className="FORMS accordion">
      <div className="FORMS__descript">
        <h1
        // className={openArrowAccord ? "_active" : ""}
        // onClick={() => {
        //   handleClickRef();
        // }}
        >
          ПРОЕКТЫ с ФОРМАМИ
        </h1>
        <div
          // className={openArrowAccord ? "openDop" : ""}
          className="openDop"
        >
          ГОТОВО
          <ul>
            <li>
              <a
                href="https://react-hook-form.com/"
                target="_blank"
                rel="noreferrer"
              >
                React Hook Form
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=Jxfun6Jnt5Q"
                target="_blank"
                rel="noreferrer"
              >
                Валидация форм с react-hook-form в React
              </a>
            </li>
          </ul>
          <br />
          НЕ сделано
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=QJYh2EgPum8"
                target="_blank"
                rel="noreferrer"
              >
                Типизация неуправляемой формы в React
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=yYq0rWESsNY"
                target="_blank"
                rel="noreferrer"
              >
                Делаем форму на React. Все самые сложные фичи
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=1_4yH0C9iq0"
                target="_blank"
                rel="noreferrer"
              >
                Быстрый курс по React Hook Form
              </a>
            </li>
          </ul>
        </div>
        {/* <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        /> */}
      </div>
      {/* <div className="FORMS__content"></div> */}
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
// export { FORMS };
