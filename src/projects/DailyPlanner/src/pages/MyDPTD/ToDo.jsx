import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

// TODO
const ToDoSpan = styled.span`
  // margin-top: 2rem;
  width: 35%;
  font-family: "Manrope", sans-serif;
  font-weight: bold;
  // @media only screen and (max-width: 700px) {
  @media only screen and (max-width: 898px) {
    width: 100%;
  }
`;

const ToDoWrapper = styled.div`
  width: 94%;
  width: 98%;
  height: 100%;
  // margin-left: 3%;
  margin-right: 2%;
  // padding-top: 0.1rem;
  border-radius: 10px;
  border: 1px solid darkred;
  background-color: rgb(255, 255, 255, 0.7);
`;

const ToDoHeader = styled.h3`
  width: 100%;
  height: 30px;
  margin-bottom: 0.5rem;
`;

// блок ЗАДАНИЙ
const ToDoList = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  // padding-right: 1rem;
  // padding-left: 1rem;
`;

// строки заданий
const ToDoItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  &:not(:first-child) {
    padding: 5px 0 0;
  }
`;

// описание ЗАДАНИЯ
const ToDoText = styled.span`
  padding-right: 1rem;
  padding-left: 1rem;
  padding-left: 0;
  text-align: left;
`;

const Right = styled.span`
  align-content: right;
`;

const ToDoButtons = styled.span`
  padding-right: 0.5rem;
  padding-right: 0rem;
  text-align: right;
  @media only screen and (max-width: 700px) {
    width: 30%;
  }

  @media only screen and (max-width: 700px) {
    width: 40%;
  }
`;

const Form = styled.form`
  float: left;
  // padding-left: 1rem;
  // padding-right: 1rem;
  float: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Input = styled.input`
  margin: 0 0.3em 0.7em 0;
  @media only screen and (max-width: 1220px) {
    width: 35%;
  }

  @media only screen and (max-width: 959px) {
    width: 30%;
  }

  @media only screen and (max-width: 780px) {
    width: 25%;
  }

  @media only screen and (max-width: 350px) {
    width: 35%;
  }

  @media only screen and (max-width: 330px) {
    width: 30%;
  }

  @media only screen and (max-width: 300px) {
    width: 25%;
  }
`;

const Todo = () => {
  // ч/з usSt Сохран. в LS и Отрисов.
  const initialEvents = localStorage.getItem("ListDPTD");
  const [todo, setTodo] = useState(
    initialEvents ? JSON.parse(initialEvents) : []
  );
  // value из input ввода Нов.Эл.
  const [newItem, setNewItem] = useState("");
  // стат. ошибки ввода Нов.Эл.
  const [newItemErr, setNewItemErr] = useState(false);

  // Ввод Нов.Эл. и отражение ч/з usSt
  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  // кнп. "Отправить" Нов.Эл. запись из Ввода в state и LS
  const handlerSubmit = (event) => {
    event.preventDefault();
    let newTodo;
    if (newItem === "Заполни поле!!!") return;
    if (newItem === "") {
      setNewItem("Заполни поле!!!");
      setNewItemErr(true);
      setTimeout(() => {
        setNewItem("");
        setNewItemErr(false);
      }, 500);
    } else {
      newTodo = [
        ...todo,
        {
          text: newItem,
          // text: "newItem",
          id: Math.floor(Math.random() * 10000),
          completed: false,
        },
      ];
      localStorage.setItem("ListDPTD", JSON.stringify(newTodo));
      setTodo(newTodo);
      setNewItem("");
    }
  };

  // кнп. "Завершить" зачеркивает эл. в state и LS
  const strikethrough = (index) => {
    let newArray = [...todo];
    newArray[index].completed = !newArray[index].completed;
    localStorage.setItem("ListDPTD", JSON.stringify(newArray));
    setTodo(newArray);
  };

  // кнп. "Удалить" из state и LS
  const deleteItem = (index) => {
    const newTodo = todo.filter((item, origIndex) => origIndex !== index);
    localStorage.setItem("ListDPTD", JSON.stringify(newTodo));
    setTodo(newTodo);
  };

  // РЕДАКТИРОВАНИЕ -----------------------------
  // стат. и id редактируемого эл.
  const [editId, setEdit] = useState(false);
  // value из input Редакт.Эл.
  const [editItem, setEditItem] = useState("");
  // стат. ошибки ввода Редакт.Эл.
  const [editItemErr, setEditItemErr] = useState(false);

  // Ввод Редакт.Эл. и отражение ч/з usSt
  const handleEditChange = (id, text) => {
    setEdit(id);
    setEditItem(text);
  };

  // кнп. "Готово" Редакт.Эл. запись из Ввода в state и LS
  // const editTodo = (id, text) => {
  const editTodo = (event, id, index, text, item) => {
    // event.preventDefault();
    let editTodos;
    if (editItem === "Заполни поле!!!") return;
    // ^ проверка поля на пробелы.
    // !!! вроде срез
    // const CheckSpaces = (str) => str.trim() !== '';
    // console.log(CheckSpaces('     '));
    if (editItem === "") {
      setEditItem("Заполни поле!!!");
      setEditItemErr(true);
      setTimeout(() => {
        setEditItem("");
        setEditItemErr(false);
      }, 500);
    } else {
      editTodos = todo.map((todo) => {
        // console.log("todo 1 ", todo);
        // console.log("todo.id 0 ", todo.id);
        // if (todo.id === id) {
        // if (todo.id === event) {
        if (todo.id === editId) {
          // todo.text = text;
          todo.text = editItem;
        }
        return todo;
      });
      localStorage.setItem("ListDPTD", JSON.stringify(editTodos));
      setTodo(editTodos);
      setEdit(false);
      setEditItem("");
    }
  };

  return (
    <ToDoSpan>
      <ToDoWrapper>
        <ToDoHeader>Список Дел</ToDoHeader>
        <ToDoList>
          {/* Сопоставляет все элементы в списке дел (из состояния) и отображает пользователю */}
          {todo.length > 0 &&
            todo.map((item, index) => {
              return (
                // {/* Отображается зачеркнутым текстом, если состояние указывает на то, что элемент выполнен */}
                <ToDoItem key={item.id}>
                  {/* Усл.Рендер. Редактируется(input) или Результат(text) при editId */}
                  {editId === item.id ? (
                    <Input
                      type="text"
                      id="editId"
                      name="editId"
                      value={editItem} // Входное значение
                      onChange={(e) => setEditItem(e.target.value)}
                      style={
                        editItemErr ? { outline: "2px solid #8b0000" } : {}
                      }
                    />
                  ) : (
                    <ToDoText
                      id={item.text}
                      className={item.completed && "strikethrough"}
                      // onDoubleClick={() => handleEditChange(item.text, index)}
                      onClick={() => handleEditChange(item.id, item.text)}
                    >
                      {item.text}
                      {/* * {item.text} */}
                      {/* {item.text} - {index} : {item.id} */}
                    </ToDoText>
                  )}
                  {/* Усл.Рендер. КНПи. Редактируется(button) или Результат(2 button) при editId */}
                  {editId === item.id ? (
                    <Button
                      // onClick={() => editTodo(index, item, item.text, item.id)}
                      // onClick={() => handlerSubmit()}
                      onClick={() =>
                        // editTodo(id, index, item, item.text, item.id)
                        editTodo(item.id, item.text)
                      }
                    >
                      Готово
                    </Button>
                  ) : (
                    <ToDoButtons>
                      <Right>
                        <Button
                          onClick={() => strikethrough(index, item, item.text)}
                        >
                          Завершить
                        </Button>
                      </Right>
                      <Right>
                        <Button onClick={() => deleteItem(index)}>
                          Удалить
                        </Button>
                      </Right>
                    </ToDoButtons>
                  )}
                </ToDoItem>
              );
            })}
        </ToDoList>
        <Form>
          <label htmlFor="newitem">Добавить эл. списка: </label>
          <Input
            type="text"
            id="newitem"
            name="newitem"
            value={newItem}
            onChange={handleChange}
            style={newItemErr ? { outline: "2px solid #8b0000" } : {}}
          />
          <Button onClick={handlerSubmit}>Отправить</Button>
        </Form>
      </ToDoWrapper>
    </ToDoSpan>
  );
};

export default Todo;
