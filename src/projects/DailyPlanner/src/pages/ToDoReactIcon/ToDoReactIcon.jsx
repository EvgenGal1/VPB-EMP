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
    // hide: true,
    id: 1,
  },
  {
    title: "Create a React Component",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis esse aut similique reprehenderit fuga cupiditate porro. Nostrum, ipsam perferendis! Fuga nisi nostrum odit nulla quia, sint harum eligendi recusandae dolore!",
    status: 0,
    hide: false,
    id: 2,
  },
  {
    title: "Learn Vue",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary.",
    status: 0,
    hide: false,
    id: 3,
  },
  {
    title: "Learn Angular",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my",
    status: 0,
    hide: false,
    id: 4,
  },
  {
    title: "Vue Typewriter",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.",
    status: 0,
    hide: false,
    id: 5,
  },
  {
    title: "Learn jQuery",
    description:
      "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa",
    status: 0,
    hide: false,
    id: 14,
  },
  {
    title: "Learn Javascript",
    description:
      "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one",
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
  const [todos, setTodos] = useLocalStorageUH("ToDoRI", Todos);
  const [hideTodos, setHideTodos] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentTodo, setCurrentTodo] = useState({});

  const maxDisplayTodos = 5;

  // useEffect(() => {
  useLayoutEffect(() => {
    //   setTodos([
    //     {
    //       title: "Learn React",
    //       description: "Learn React and its ecosystem",
    //       status: 0,
    //       hide: false,
    //       id: 1,
    //     },
    //   ]);
    localStorage.setItem("ToDoRI", JSON.stringify(todos));
    // }, []);
  }, [todos]);

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
      localStorage.setItem("ToDoRI", JSON.stringify([...todos, newTodo]));
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
      localStorage.setItem("ToDoRI", JSON.stringify(newTodos));
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
    localStorage.setItem("ToDoRI", JSON.stringify(newTodos));
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
    localStorage.setItem("ToDoRI", JSON.stringify(newTodos));
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
            Проект на основе
            <span>
              <a
                href="/DailyPlanner/DayPlanToDo"
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
