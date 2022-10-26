import React, { useState, useLayoutEffect, useEffect } from "react";

export function UlbiTV_MiniDrADr() {
  const [theme, setTheme] = useState(localStorage.getItem("--theme"));
  const [colorTheme, setСolorTheme] = useState("");
  // console.log("theme ", theme);
  // const selColorTheme = () => {
  //   // var colorTheme;
  //   if (theme === "dark") {
  //     // colorTheme = "#f0f";
  //     setСolorTheme("#f0f");
  //     console.log("colorTheme 1 ", colorTheme);
  //   }
  //   if (theme === "natural") {
  //     // colorTheme = "#0f0";
  //     setСolorTheme("#0f0");
  //     console.log("colorTheme 2 ", colorTheme);
  //   }
  //   if (theme === "light") {
  //     // colorTheme = "#00f";
  //     setСolorTheme("#00f");
  //     console.log("colorTheme 3 ", colorTheme);
  //   }
  // };
  // console.log("colorTheme ", colorTheme);
  // useLayoutEffect(() => {
  useEffect(() => {
    // document.body.setAttribute("data-theme", theme);
    // localStorage.setItem("--theme", theme);
    if (theme === "dark") {
      // colorTheme = "#f0f";
      setTheme("dark");
      setСolorTheme("#f0f");
      // setСolorTheme("--YellowBrown");
      // console.log("colorTheme 1 ", colorTheme);
    }
    if (theme === "natural") {
      // colorTheme = "#0f0";
      setTheme("natural");
      setСolorTheme("#0f0");
      // console.log("colorTheme 2 ", colorTheme);
    }
    if (theme === "light") {
      // colorTheme = "#00f";
      setTheme("light");
      setСolorTheme("#00f");
      // console.log("colorTheme 3 ", colorTheme);
    }
    // }, [theme, colorTheme]);
    // localStorage.setItem("--theme", theme);
  }, [theme, colorTheme]);
  // }
  // return { theme, setTheme };
  // useEffect(() => {
  //   localStorage.getItem("--theme");

  //   // return () => {
  //   //   second
  //   // }
  // }, [theme]);

  // список карт с сост. по умолч. масс. с объми
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: "КАРТОЧКА 3" },
    { id: 8, order: 8, text: "КАРТОЧКА 8" },
    { id: 3, order: 2, text: "КАРТОЧКА 2" },
    { id: 7, order: 7, text: "КАРТОЧКА 7" },
    { id: 4, order: 4, text: "КАРТОЧКА 4" },
    { id: 5, order: 5, text: "КАРТОЧКА 5" },
    { id: 6, order: 6, text: "КАРТОЧКА 6" },
    { id: 2, order: 1, text: "КАРТОЧКА 1" },
  ]);

  // запоминаем взятую карту
  const [currentCard, setCurrentCard] = useState(null);

  // FN СЛУШАТЕЛИ
  // взяли карту
  function dragStartHandler(e, card) {
    // console.log("start ", card);
    // запись в сост. при взятии карты
    setCurrentCard(card);
  }
  // отпустили карту (слуш-ли onDragLeave и onDragEnd)
  function dragEndHandler(e) {
    // возвращ. цвет карты после опуска
    e.target.style.backgroundColor = "white";
    // e.target.style.backgroundColor = {'{--DarkRed} ? {--DarkRed} : "white"'};
  }
  // висит над др. картой
  function dragOverHandler(e) {
    // откл. действ. по умолч.
    e.preventDefault();
    // подсветка карты приёма
    e.target.style.backgroundColor = "lightgray";
    e.target.style.backgroundColor = colorTheme ? colorTheme : "gray";
    // e.target.style.setProperty("backgroundColor", "--footer-color");
    // e.target.style.setProperty("--footer-color", "backgroundColor");
  }
  // действ. после опуска (изменение порядка)
  function dropHandler(e, card) {
    // console.log("drop ", card);
    // откл. действ. по умолч.
    e.preventDefault();
    // сортировка карт изменяя масс. Меняем порядки у пришедшей и приёмной карты
    setCardList(
      cardList.map((c) => {
        // услов. е/и перебран.id масс. = id карты приёма
        if (c.id === card.id) {
          // просвойка порядка. карте с низу от той что пришла
          return { ...c, order: currentCard.order };
        }
        // услов. е/и перебран.id масс. = id карты прихода
        if (c.id === currentCard.id) {
          // просвойка порядка. uарте что пришла от той что снизу
          return { ...c, order: card.order };
        }
        return c;
      })
    );
    // возврат цвета по умолч.
    e.target.style.backgroundColor = "white";
  }

  // fn сортировки приним 2 объ
  const sortCard = (a, d) => {
    // е/и 1ый > 2го то возвращ. 1
    if (a.order > d.order) return 1;
    // иначе возвращ. -1
    else return -1;
  };

  return (
    <div className="UlbiTV_MiniDrADr">
      <div className="MiniDrADr__descript">
        <h1>MiniDrADr</h1>
      </div>
      <div className="MiniDrADr__content">
        {/* перебор масс. с отрисовкой. дополнен перед map вызов sort с передачей fn()сортировки */}
        {cardList.sort(sortCard).map((card) => (
          <div
            key={card.id}
            className={`card`}
            // ЛОГИКА. Вешаем слушатели с вызов. fn приним. событ. В слуш-ли Start и Drop ещё принима карты
            // флаг для перетаскивания в true
            draggable={true}
            // слушатель при действ. с картой
            onDragStart={(e) => dragStartHandler(e, card)}
            // слуш. при выходе за пределы др. карты
            onDragLeave={(e) => dragEndHandler(e)}
            // слуш. при опуск. перемешения
            onDragEnd={(e) => dragEndHandler(e)}
            // слуш. при нахожден. над др. объ.
            onDragOver={(e) => dragOverHandler(e)}
            // при опускании и ожид. действ.
            onDrop={(e) => dropHandler(e, card)}
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}
// export default UlbiTV_MiniDrADr;
