import React, { useState } from "react";

export function UlbiTV_DrADr() {
  // набор досок с задачами в сост. по умолч. Масс. с объ-ми (доски) с массивом объ-ов (задачи)
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "ПЛАНЫ",
      items: [
        { id: 1.1, text: "1.1 Любимка" },
        { id: 1.2, text: "1.2 Семья" },
        { id: 1.3, text: "1.3 Спать" },
        { id: 1.4, text: "1.4 Играть" },
        { id: 1.5, text: "1.5 Код" },
        { id: 1.6, text: "1.6 Читать" },
      ],
    },
    {
      id: 2,
      title: "НА СЕГОДНЯ",
      items: [
        { id: 2.1, text: "2.1 Мясо" },
        { id: 2.2, text: "2.2 Работа" },
        { id: 2.3, text: "2.3 Гулянка" },
        { id: 2.4, text: "2.4 Код" },
      ],
    },
    {
      id: 3,
      title: "ПРОВЕРЕНО",
      items: [
        { id: 3.1, text: "3.1 Любимка" },
        { id: 3.2, text: "3.2 Семья" },
      ],
    },
    {
      id: 4,
      title: "СДЕЛАЛ",
      items: [
        { id: 4.1, text: "4.1 Мясо" },
        { id: 4.2, text: "4.2 Код" },
        { id: 4.3, text: "4.3 Почитать" },
        { id: 4.4, text: "4.4 Семья" },
      ],
    },
  ]);

  // запоминаем взятую задачу
  const [currentItem, setCurrentItem] = useState(null);
  // запоминаем доску от куда задача взята
  const [currentBoard, setCurrentBoard] = useState(null);

  // FN СЛУШАТЕЛИ
  // взяли карту
  function dragStartHandler(e, board, item) {
    // сохран. текущ. задачу и доску
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  // висит над др. эл.
  function dragOverHandler(e) {
    // откл. действ. по умолч.
    e.preventDefault();
    // тень на задачу с низу е/и над ней др. задача
    if (e.target.className === "board") {
      e.target.style.boxShadow = "5px 5px 10px 3px #555";
    }
    if (e.target.className === "item") {
      e.target.style.boxShadow = "5px 5px 10px 3px #555";
      e.target.style.background = "lightgreen";
      e.target.style.fontWeight = "bold";
    }
  }
  // при выходе за пределы др. эл.
  function dragLeaveHandler(e) {
    e.preventDefault();
    // убираем тень
    if (e.target.className === "board") {
      // console.log("e.target board ", e.target);
      e.target.style.boxShadow = "none";
    }
    if (e.target.className === "item") {
      // console.log("e.target item ", e.target);
      e.target.style.boxShadow = "3px 3px 7px 0px #555";
      e.target.style.background = "none";
      e.target.style.fontWeight = "normal";
    }
  }
  // отпустили карту
  function dragEndHandler(e) {
    e.preventDefault();
    // возвращ. тень после опуска
    if (e.target.className === "board") {
      e.target.style.boxShadow = "none";
    }
    if (e.target.className === "item") {
      e.target.style.boxShadow = "3px 3px 7px 0px #555";
      e.target.style.background = "none";
      e.target.style.fontWeight = "normal";
    }
  }
  // действ. после опуска (изменение порядка)
  function dropHandler(e, board, item) {
    // откл. действ. по умолч.
    e.preventDefault();
    // получ id эл.(тек.задачи) из масс. у текущ.доски(от куда эл.). Обращ к текущей доске в поле item и возвращ. id эл. в массиве (indexOf)
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // удал эл. с текущ.доски ч/з splice (парам.: 1ый - id с какого удал., 2ой кол-во.удал.эл.)
    currentBoard.items.splice(currentIndex, 1);
    // получ id эл. над которым держим задачу
    const dropIndex = board.items.indexOf(item);
    // в доску под эл.(задачей) встав эл. (парам.: 1ый увелич. - встав. после задачи, 2ой колво удал. эл. 0, 3ий вставл.эл.)
    board.items.splice(dropIndex + 1, 0, currentItem);
    // измен.сост.досок. ~ замена стар.досок на изменённые
    setBoards(
      // передача текущ.масс.досок изменён. ч/з map
      boards.map((b) => {
        // е/и итер.эл. = именёной доске, то возврщ. измен.доску
        if (b.id === board.id) {
          return board;
        }
        // е/и итер.эл. = текущ.доске(от куда эл.) возвращ. текущ.доску
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        // иначе возврат.эл.итер.
        return b;
      })
    );
    // вроде ни где не срабатывают
    // if (e.target.className === "item")
    //   e.target.style.boxShadow = "3px 3px 7px 0px #555 ";
    // if (e.target.className === "board") e.target.style.boxShadow = "none";
  }

  // слуш на доске
  function dropCardHandler(e, board) {
    // доп.проверка из комментов видео. Из выбран. доски берём id эл.
    const currentId = board.items.map((item) => item.id);
    // доп.проверка из вид. е/и выбран.id НЕ включает текущ.id (убирает переход сразу 2 эл. в нов.доску)
    if (!currentId.includes(currentItem.id)) {
      // добавл. задачу в конец доски. Обращ. в наведённой доске к items и ч/з push вставл. текущ.эл.
      board.items.push(currentItem);
      // получ id эл.(тек.задачи) из масс. у текущ.доски(от куда эл.).
      const currentIndex = currentBoard.items.indexOf(currentItem);
      // удал эл. с текущ.доски ч/з splice
      currentBoard.items.splice(currentIndex, 1);
      // fn замены сост.
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
    if (e.target.className === "board") {
      e.target.style.boxShadow = "3px 3px 7px 0px #555";
      e.target.style.boxShadow = "none";
    }
    if (e.target.className === "item") {
      e.target.style.boxShadow = "3px 3px 7px 0px #555";
      e.target.style.background = "none";
      e.target.style.fontWeight = "normal";
    }
  }

  return (
    <div className="UlbiTV_DrADr">
      <div className="DrADr__descript">
        <h1>DrADr</h1>
      </div>
      <div className="DrADr__content">
        {/* перебор внешнего масс. с отрисовкой.  */}
        {boards.map((board) => (
          <div
            key={board.id}
            className="board"
            // слуш-ли на доске
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
            onDragLeave={(e) => dragLeaveHandler(e)}
          >
            <div className="board__title">{board.title}</div>
            {/* по эл.(items) из внешн. масс.(board), перебор внутр. масс. с отрис. */}
            <div className="items">
              {board.items.map((item) => (
                <div
                  key={item.id}
                  className="item"
                  // ЛОГИКА. Вешаем слушатели с вызов. fn приним. событ. В слуш-ли Start и Drop ещё принима карты
                  // флаг для перетаскивания в true
                  draggable={true}
                  // слушатель при действ.
                  onDragStart={(e) => dragStartHandler(e, board, item)}
                  // слуш. при выходе за пределы др.
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  // слуш. при опуск. перемешения
                  onDragEnd={(e) => dragEndHandler(e)}
                  // слуш. при нахожден. над др. объ.
                  onDragOver={(e) => dragOverHandler(e)}
                  // при опускании и ожид. действ.
                  onDrop={(e) => dropHandler(e, board, item)}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// export default UlbiTV_DrADr;
