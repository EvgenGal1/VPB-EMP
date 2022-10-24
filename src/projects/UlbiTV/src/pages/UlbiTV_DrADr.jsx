import React, { useState } from "react";

export function UlbiTV_DrADr() {
  // набор досок с задачами в сост. по умолч. Масс. с объ-ми (доски) с массивом объ-ов (задачи)
  const [boards, setBoards] = useState([
    {
      id: 10,
      title: "ПЛАНЫ",
      items: [
        { id: 1.1, text: "Любимка" },
        { id: 1.2, text: "Семья" },
        { id: 1.3, text: "Спать" },
        { id: 1.4, text: "Играть" },
        { id: 1.5, text: "Код" },
        { id: 1.6, text: "Читать" },
      ],
    },
    {
      id: 20,
      title: "НА СЕГОДНЯ",
      items: [
        { id: 2.1, text: "Мясо" },
        { id: 2.2, text: "Работа" },
        { id: 2.3, text: "Гулянка" },
        { id: 2.4, text: "Код" },
      ],
    },
    {
      id: 3,
      title: "ПРОВЕРЕНО",
      items: [
        { id: 3.1, text: "Любимка" },
        { id: 3.2, text: "Семья" },
      ],
    },
    {
      id: 40,
      title: "СДЕЛАЛ",
      items: [
        { id: 4.1, text: "Мясо" },
        { id: 4.2, text: "Код" },
        { id: 4.3, text: "Почитать" },
        { id: 4.4, text: "Семья" },
      ],
    },
  ]);

  // стат. добавления эл.
  const [newValItem, setValNewItem] = useState("");
  // стат. ошибки ввода
  const [newItemErr, setNewItemErr] = useState(false);

  // fn добавлен. эл. (пока по умолч. в первую доску)
  const addNewItem = (item) => {
    if (item === "Заполни поле!!!") return;
    if (item !== "") {
      const newItem = {
        key: Date.now(),
        id: new Date().getMilliseconds(),
        text: newValItem,
      };
      setCurrentBoard([...boards, boards[0].items.push(newItem)]);
      setValNewItem("");
    } else {
      setValNewItem("Заполни поле!!!");
      setNewItemErr(true);
      setTimeout(() => {
        setValNewItem("");
        setNewItemErr(false);
      }, 500);
    }
  };

  const removeItem9 = (item) => {
    // if (item === "Заполни поле!!!") return;
    if (item !== "") {
      // const newItem1 = {
      //   key: Date.now(),
      //   id: new Date().getMilliseconds(),
      //   text: newItem,
      // };
      // setCurrentBoard([...boards, boards[0].items.push(newItem1)]);
      setCurrentBoard([...boards, boards.splice(item, item)]);
      // setNewItem("");
    }
    // else {
    //   setNewItem("Заполни поле!!!");
    //   setNewItemErr(true);
    //   setTimeout(() => {
    //     setNewItem("");
    //     setNewItemErr(false);
    //   }, 500);
    // }
  };

  function removeNode(arr, id) {
    arr.forEach((it, index) => {
      if (it.id === id) {
        arr.splice(index, 1);
      }
      removeNode(it.children, id);
    });
  }
  // removeNode([db], 4);

  // по логам видно что нажатая задача не возвращается. не понятно ка теперь вывести
  const removeItem = (boardId, itemId, board, item) => {
    // console.log('setBoards ', setBoards);
    console.log("board ", board);
    console.log("boardId ", boardId);
    console.log("item ", item);
    console.log("itemId ", itemId);
    // boards.filter((i) => {
    //   if (i.id === id) {
    // setBoards(
    // setCurrentBoard(
    boards.filter((item) => item.id !== itemId);
    // currentBoard.filter((item) => item.id !== itemId);
    // setCurrentBoard.filter((item) => item.id !== itemId);
    // boards.splice(boardId, itemId)
    // currentBoard.splice(boardId, itemId)
    // boards.splice(itemId, boardId)
    //   board.forEach((item, index) => {
    //   if (item.id === itemId) {
    //     board.splice(index, 1);
    //   }
    //   removeItem(item.children, itemId);
    // });
    // );
    // setBoards(
    // setBoards.forEach((id, index) => {
    // boards.forEach((board, index) => {
    //   // console.log("board ", board);
    //   // setBoards(
    //   board.items.filter(
    //     // (items) => items.itemId !== itemId
    //     (items) =>
    //       //   //   //   // Array.prototype.filter () ожидает возврата от функции стрелки
    //       {
    //         if (items.id !== itemId) {
    //           // setBoards.splice(items, 1);
    //           //       // console.log("i 2 ", items);
    //           console.log("i.id 2 ", items.id);
    //           //       // console.log("b.items 2 ", board.items);
    //           //       // console.log("boards 2 ", boards);
    //           //       return setBoards(boards);
    //         }
    //         //     //     //   // return setBoards(boards);
    //       }
    //     // i.id !== id
    //   );
    //   // );
    //   // if (id.id === idItem) {
    //   //   console.log('id.id  ', id.id);
    //   //   setBoards.splice(index, 1)
    //   // }
    // });
    // );

    //     function removeNode(arr, id) {
    //   arr.forEach((it, index) => {
    //     if (it.id === id) {
    //       arr.splice(index, 1)
    //     }
    //     removeNode(it.children, id)
    //   })
    // }

    // removeNode([db], 4);
    // console.log(db);
  };

  const removeItem7 = (id) => {
    setBoards(
      boards.filter((i) => {
        if (i.id === id) {
          // console.log("b 2 ", b);
          console.log("1 ", 1);
          // console.log("b.items 2 ", b.items);
          //         return setBoards(boards);
        }
      })
    );
  };

  const removeItem5 = (id) => {
    // setBoards(
    // удал доску
    // boards.filter(
    //   (b) => b.id !== id

    boards.filter(
      // boards.map(
      (b) => {
        console.log("b 1 ", b);
        console.log("b.items 1 ", b.items);
        // setBoards(
        // b.items.filter((i) => i.id !== id);
        b.items.filter((i) => {
          if (i.id !== id) {
            console.log("b 2 ", b);
            console.log("1 ", 1);
            console.log("b.items 2 ", b.items);
            //         return setBoards(boards);
          }
          console.log("2 ", 2);
          //       // console.log("boards ", boards);
        });
        // );
      }
      //
      // {
      //   return board.filter((item) => {
      //     return item
      //   })
      // })
    );
    // )
  };

  // fn удаления эл. из доски
  const removeItem1 = (id) => {
    console.log("id ", id);

    // setBoards(prevState => prevState.filter(el => el.id !== id))

    setBoards(
      //   // Array.prototype.map () ожидает возврата значения от функции стрелки.
      // boards.filter((b) => {
      boards.map((b) => {
        console.log("boards ", boards);
        console.log("b ", b);
        // b.id !== id
        // setBoards(prevState => prevState.filter(el => el.id !== id))
        // b.length;
        //     b.items.map((i) => {
        //       console.log('i ', i);
        // if (b.id === id) {
        //   console.log('i.id в ', b.id);
        //   console.log('i в ', b);
        //   console.log('id в ', id);
        //   return boards
        // }
        return b.items.filter(
          (i) =>
            // {
            //   console.log('b.items ', b.items); // array. id - 10,20,..
            i.id !== id
          //   // return i.id !== id
          //   // return i
          //   // console.log('i ', i);
          //   if (i.id !== id) {
          //     console.log('ооооооооооооооонннннннннннннннноооооооооооооооооо');
          //     console.log('i.id в ', i.id); // 1.1,
          //     console.log('i в ', i);
          //     console.log('id в ', id);
          //     // return setBoards(boards)/

          //     // return b.items

          //     // return boards
          //     // return i
          //     // return b
          //   }
          //   // return i
          //   // return b
          //   // return b.items
          // }
        );
        // if (i.id !== id) {
        //   console.log('i.id в ', i.id);
        //   console.log('i в ', i);
        //   console.log('id в ', id);
        //   // return id
        // }
        //       // Ожидается, что назначение или функциональный вызов и вместо этого увидел выражение.
        //       // return id
        //     })
        // return i.id !== id
        // return b
        // return boards
      })
    );
  };

  // {boards.map((board) => (
  //                 {board.items.map((item) => (

  // setBoards(
  //     boards.map((b) => {

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
  function dragDropHandler(e, board, item) {
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
        // e.stopPropagation();
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
    // доп.проверка 1 вар из комментов видео. Из выбран. доски берём id эл.
    // const currentId = board.items.map((item) => item.id);
    // доп.проверка 1 вар из вид. е/и выбран.id НЕ включает текущ.id (убирает переход сразу 2 эл. в нов.доску)
    // if (!currentId.includes(currentItem.id)) {
    // доп.проверка 2 вар из вид. Смотрит отсутств. класса
    if (e.target.className !== "item") {
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
        {/* ФОРМА */}
        <form className="form">
          <input
            type="text"
            // name={newItem}
            name="description"
            // value={newItem}
            // value={e.target.value}
            value={newValItem == null ? "" : newValItem}
            className="form__field"
            // onClick={(e) => addNewItem()}
            onChange={(e) => setValNewItem(e.target.value)}
            style={
              newItemErr ? { outline: "2px solid #f00" } : { outline: "none" }
            }
          />
          <button
            className="btn btn--primary btn--inside uppercase"
            onClick={() => addNewItem(newValItem)}
            type="button"
          >
            button
          </button>
        </form>
        {/* ДОСКИ */}
        <div className="boards">
          {/* перебор внешнего масс. с отрисовкой.  */}
          {boards.map((board) => (
            <div
              // onClick={() => removeItem3(board.id)}
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
                    onDoubleClick={() =>
                      removeItem(board.id, item.id, board, item)
                    }
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
                    onDrop={(e) => dragDropHandler(e, board, item)}
                  >
                    {item.id} {item.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// export default UlbiTV_DrADr;
