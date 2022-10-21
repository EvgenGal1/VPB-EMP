import React, { useState } from "react";

export function UlbiTV_DrADr() {
  // набор досок с задачами в сост. по умолч. Масс. с объ-ми (доски) с массивом объ-ов (задачи)
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "ПЛАНЫ",
      items: [
        { id: 1, text: "Любимка" },
        { id: 2, text: "Семья" },
        { id: 3, text: "Поспать" },
        { id: 4, text: "Поиграть" },
        { id: 5, text: "Код" },
        { id: 6, text: "Почитать" },
      ],
    },
    {
      id: 2,
      title: "НА СЕГОДНЯ",
      items: [
        { id: 1, text: "Мясо" },
        { id: 2, text: "Работа" },
        { id: 3, text: "Гулянка" },
        { id: 4, text: "Код" },
      ],
    },
    {
      id: 3,
      title: "ПРОВЕРЕНО",
      items: [
        { id: 3, text: "Любимка" },
        { id: 4, text: "Семья" },
      ],
    },
    {
      id: 4,
      title: "СДЕЛАЛ",
      items: [
        { id: 1, text: "Мясо" },
        { id: 2, text: "Код" },
        { id: 3, text: "Почитать" },
        { id: 4, text: "Семья" },
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
    setCurrentItem(item);
    setCurrentBoard(board);
  }
  // висит над др. эл.
  function dragOverHandler(e) {
    // откл. действ. по умолч.
    e.preventDefault();
    // тень на задачу с низу е/и над ней др. задача
    if (e.target.className === "item") {
      // e.target.style.boxShadow = "0 4px 3 px gray";
      e.target.style.background = "#555";
    }
  }
  // при выходе за пределы др.
  function dragLeaveHandler(e) {
    // убираем тень
    // e.target.style.background = "none";
    e.target.style.background = "#fff";
  }
  // отпустили карту (слуш-ли onDragLeave и onDragEnd)
  function dragEndHandler(e) {
    // возвращ. тень после опуска
    // e.target.style.boxShadow = "none";
    e.target.style.background = "#fff";
  }
  // действ. после опуска (изменение порядка)
  function dropHandler(e, board, item) {
    // откл. действ. по умолч.
    e.preventDefault();
    // получ id масс. у текущ. задачи
    const currentIndex = currentBoard.items.indexOf(currentItem);
    // ??? не раб - при косании задачи теряется item.text (скорее всего нужна доп проверка на id item/board | замен одного text на другой е/и есть)
    currentBoard.items.splice(currentIndex, 1);
    // получ id эл. над которым держим задачу
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    // ~ замена страр.досок на изменённые
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
    e.target.style.background = "#fff";
  }

  // слуш на доске
  function dropCardHandler(e, board) {
    const currentIndex = currentBoard.items.indexOf(currentItem);
    board.items.push(currentIndex);
    currentBoard.items.splice(currentIndex, 1);
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
    e.target.style.background = "#fff";
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
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHandler(e, board)}
          >
            <div className="board__title">{board.title}</div>
            {/* по эл.(items) из внешн. масс.(board), перебор внутр. масс. с отрис. */}
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
        ))}
      </div>
    </div>
  );
}
// export default UlbiTV_DrADr;
