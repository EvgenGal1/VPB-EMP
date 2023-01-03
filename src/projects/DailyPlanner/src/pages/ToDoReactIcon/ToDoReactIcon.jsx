import React, { useState, useEffect, useLayoutEffect } from "react";

import { ArrowAccordionFnComp } from "../../../../../Components/ui/accordion/ArrowAccordion.jsx";
import { useLocalStorageUH } from "../../../../../scripts/hooks/useLocalStorageUH.jsx";

import { FaPlusCircle } from "react-icons/fa";

import ToDoForm from "./ToDoForm.jsx";
import ToDoCard from "./ToDoCard.jsx";

import "./ToDoReactIcon.scss";

const Todos = [
  {
    title: "Learn React",
    description: "Learn React and its ecosystem",
    status: 0,
    hide: false,
    id: 1,
  },
  {
    title: "Create a React Component",
    description: "Lorem ipsum dolor sit ",
    status: 0,
    hide: false,
    id: 2,
  },
  {
    title: "Learn Vue",
    description: "Far far away .",
    status: 0,
    hide: false,
    id: 3,
  },
  {
    title: "Learn Angular",
    description: "A wonderful serenity has ",
    status: 0,
    hide: false,
    id: 4,
  },
  {
    title: "Vue Typewriter",
    description: "Sed ut perspiciatis unde omnis  .",
    status: 0,
    hide: false,
    id: 5,
  },
  {
    title: "Learn jQuery",
    description: "Li Europan lingues es ",
    status: 0,
    hide: false,
    id: 14,
  },
  {
    title: "Learn Javascript",
    description: "The European languages are ",
    status: 0,
    hide: false,
    id: 15,
  },
];

export const ToDoReactIcon = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  // const [todos, setTodos] = useState([]);
  // const saved = localStorage.getItem("--ToDoRI");
  // const [todos, setTodos] = useState(saved ? JSON.parse(saved) : []);
  // const [todos, setTodos] = useLocalStorageUH("ToDoRI", Todos);
  const [todos, setTodos] = useLocalStorageUH("ToDoRI", []);
  const [hideTodos, setHideTodos] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentTodo, setCurrentTodo] = useState({});

  const maxDisplayTodos = 5;

  // useLayoutEffect(() => {
  useEffect(
    () => {
      //   setTodos([
      //     {
      //       title: "Learn React",
      //       description: "Learn React and its ecosystem",
      //       status: 0,
      //       hide: false,
      //       id: 1,
      //     },
      //   ]);
      // setTodos(Todos);
      // localStorage.getItem("ToDoRI", JSON.parse(todos));
      const saved = localStorage.getItem("ToDoRI");
      // const [todos, setTodos] = useState(saved ? JSON.parse(saved) : []);
      setTodos(saved ? JSON.parse(saved) : Todos);
      // saved ? JSON.parse(saved) : [];
      // localStorage.setItem("ToDoRI", JSON.stringify(todos));
      // }, []);
    },
    [
      /* setTodos */
      /* todos */
    ]
  );

  // ввод ПОИСК
  function handleSearchChange(evt) {
    setSearchText(evt.target.value);

    const newTodos = todos.map((todo) => {
      todo.hide = !(
        todo.title.toLowerCase().includes(evt.target.value.toLowerCase()) ||
        todo.description.toLowerCase().includes(evt.target.value.toLowerCase())
      );
      return todo;
    });
    setTodos(newTodos);
  }

  // кнп. ДОБАВИТЬ
  function handleAddTodo(todo) {
    if (todo.id === undefined) {
      const newTodo = {
        title: todo.title,
        description: todo.description,
        status: 0,
        hide: false,
        id: Date.now() % 1000000,
      };
      setTodos([...todos, newTodo]);
    } else {
      const newTodos = todos.map((todo_) => {
        if (todo.id === todo_.id) {
          todo_.title = todo.title;
          todo_.description = todo.description;
          todo_.status = todo.status;
        }
        return todo_;
      });
      setTodos(newTodos);
    }
    setCurrentTodo({});
    setShowForm(false);
  }

  // кнп. СПРЯТАТЬ/ПОКАЗАТЬ список всех эл.
  function handleHideTodos() {
    const newHideTodos = !hideTodos;
    setHideTodos(newHideTodos);
    if (newHideTodos) {
      const newTodos = todos.map((todo, index) => {
        if (index >= maxDisplayTodos) todo.hide = false;
        return todo;
      });
      setTodos(newTodos);
    } else {
      const newTodos = todos.map((todo, index) => {
        if (index >= maxDisplayTodos) todo.hide = true;
        return todo;
      });
      setTodos(newTodos);
    }
  }

  // кнп. РЕДАКТИРОВАТЬ
  function handleEditTodo(id) {
    setShowForm(true);
    const todo = todos.find((todo) => todo.id === id);
    setCurrentTodo(todo);
  }

  // кнп. УДАЛИТЬ
  function handleDeleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  // Изменить статус
  function handleChangeStatus(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = todo.status === 2 ? 0 : todo.status + 1;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="ToDoReactIcon accordion">
      <div className="ToDoReactIcon__descript">
        <h1
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          ToDoReactIcon
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
          <div>
            Проект на основе{" "}
            <span>
              <a
                href="https://dev.to/shivishbrahma/building-a-todo-app-in-react-51c8#fromHistory"
                target="_blank"
                rel="noreferrer"
              >
                ToDo на React с Icon
              </a>
            </span>
          </div>
          <br />
          <ol>
            <li>
              Устан доп.зависимостей
              <ul>
                <li>npm i react-icons</li>
              </ul>
            </li>
            <li>
              Созд. 3 Основ Компонента
              <ul>
                <li>ToDoReactIcon (Логика, Поиск, Лист, сбор компонентов,)</li>
                <li>ToDoForm (форма заполнения нов.карты)</li>
                <li>ToDoCard (отдельная карточка эл.)</li>
              </ul>
            </li>
            <li>
              Правки
              <ul>
                <li>Запись данных в LS</li>
                <li>Прописка всех title у значков</li>
                <li>Переименовка всех кнп.</li>
                <li>Стандарт стилей (цвета, размеры, отступы)</li>
                <li>Измен.отраж.эл.значков</li>
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
        className="ToDoReactIcon__content-- openCont"
        // className={`ToDoReactIcon__content--${
        //   openArrowAccord ? " openCont" : ""
        // }`}
      >
        {/* <section className="ToDoReactIcon"> */}
        <div className="ToDoReactIcon__Search">
          <input
            type="text"
            value={searchText}
            onChange={(evt) => handleSearchChange(evt)}
            placeholder="ПОИСК"
          />
          <button
            className="ToDoReactIcon__create_btn"
            onClick={() => setShowForm(true)}
          >
            <FaPlusCircle title="Добавить" />
          </button>
        </div>

        {showForm && (
          <ToDoForm
            handleAddTodo={handleAddTodo}
            {...currentTodo}
            closeForm={() => {
              setCurrentTodo({});
              setShowForm(false);
            }}
          />
        )}

        <div className="ToDoList">
          {(todos || []).map((todo, index) => (
            <ToDoCard
              key={index}
              {...todo}
              handleChangeStatus={handleChangeStatus}
              handleEditTodo={handleEditTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
          {(!todos || todos.length === 0) && (
            <div className="ToDoList__empty">
              <p>Ничего не найдено</p>
            </div>
          )}
          {todos.length > maxDisplayTodos && (
            <button
              className="ToDoList__action"
              type="button"
              onClick={() => handleHideTodos()}
            >
              {hideTodos ? "СПРЯТАТЬ" : "ПОКАЗАТЬ"}
            </button>
          )}
        </div>
        {/* </section> */}
      </div>
    </div>
  );
};
//export {ToDoReactIcon}
