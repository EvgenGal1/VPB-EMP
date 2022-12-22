import React, { useState } from "react";

import { ArrowAccordionFnComp } from "../../../../../Components/ui/accordion/ArrowAccordion.jsx";

// пакеты FullCalendar
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";
import { EventItem } from "./EventItem";

export const FullCalendarFC = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  // интерактивность
  const [events, setEvents] = useState([]);

  // обработчик событий
  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };

  return (
    <div className="FullCalendarFC accordion">
      <div className="FullCalendarFC__descript">
        <h1
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          FullCalendar descript
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
          <div>Проект на основе FullCalendar (Учебное пособие)</div>
          <p>https://isamatov.com/react-fullcalendar-tutorial/</p>
          {/* // !!! не раб - эл. наплывают др на друга. Причины пока не понятны */}
          <p style={{ color: "red", backgroundColor: "#111" }}>
            !!! не раб - эл. наплывают др на друга если есть задания на
            несколько дней и на день. Причины пока не понятны
          </p>
          <ol>
            <li>
              Установка основных пакетов
              <ul>
                <li>npm add @fullcalendar/daygrid @fullcalendar/react</li>
              </ul>
            </li>
            <li>
              importы в Компоненте
              <ul>
                <li>import FullCalendar from "@fullcalendar/react";</li>
                <li>import daygridPlugin from "@fullcalendar/daygrid"; </li>
              </ul>
            </li>
            <li>
              Подкл. Компонент
              <ul>
                <li>
                  &lt;FullCalendar plugins=&#123;[daygridPlugin]&#125; /&gt;
                </li>
              </ul>
            </li>

            <li>
              Верхняя панель
              <ul>
                <li>headerToolbar(объ.) - эл.управ.(start, center, end)</li>
                <li>views - </li>
                <li>
                  Парам. эл.управ.(стр.)
                  <ul>
                    <li>today</li>
                    <li>prevYear</li>
                    <li>prev</li>
                    <li>next</li>
                    <li>nextYear</li>
                    <li>title</li>
                    <li>dayGridMonth</li>
                    <li>dayGridWeek</li>
                    <li>dayGridDay</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Добавления интерактива
              <ul>
                <li>установка - npm add @fullcalendar/interaction</li>
                <li>
                  import - import interactionPlugin from
                  "@fullcalendar/interaction";
                </li>
                <li>usSt - const [events, setEvents] = useState([]);</li>
                <li>props - editable selectable events=&#123;events&#125;</li>
              </ul>
            </li>

            <li>
              События
              <ul>
                <li>
                  fn()handleSelect обработчик (приним. info объ. с датами)
                </li>
                <li>props - select={handleSelect}</li>
                <li>prompt - запрос назв. событ</li>
                <li>id уник. ч/з библ. uuid</li>
                <li>eventClick - редактирование</li>
                <li>eventChange - перетаскивание</li>
              </ul>
            </li>

            <li>
              Настр. Внешний вид события
              <ul>
                <li>EventItem - Нов. компонент</li>
                <li>
                  Настр.содерж.событ. - eventContent=&#123;(info) =&gt;
                  &lt;EventItem info=&#123;info&#125; /&gt;&#125;
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
        className="FullCalendarFC__content-- openCont"
        // className={`FullCalendarFC__content--${
        //   openArrowAccord ? " openCont" : ""
        // }`}
      >
        <FullCalendar
          // нач.
          plugins={[daygridPlugin, interactionPlugin]}
          // эл.управ.
          headerToolbar={{
            start: "today prevYear prev next nextYear",
            center: "title",
            end: "dayGridMonth dayGridWeek dayGridDay",
          }}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
          // интерактив + plugins
          editable
          selectable
          events={events}
          // события
          select={handleSelect}
          // Настр. Внешний вид события
          eventContent={(info) => <EventItem info={info} />}
        />
      </div>
    </div>
  );
};
//export {FullCalendar}
