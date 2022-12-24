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
  // Компонент будет сохранять и извлекать элементы списка дел из локального хранилища.
  const initialEvents = localStorage.getItem("ListDPTD");
  const [todo, setTodo] = useState(
    initialEvents ? JSON.parse(initialEvents) : []
  );
  const [newItem, setNewItem] = useState("");

  // устанавливает состояние для типизированного ввода, когда пользователь вводит
  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  // устанавливает состояние и обновляет локальное хранилище, добавляя элемент списка дел, когда пользователь нажимает submid
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = [...todo, { text: newItem, completed: false }];
    localStorage.setItem("ListDPTD", JSON.stringify(newTodo));
    setTodo(newTodo);
    setNewItem("");
  };

  // Обновляет состояние элемента списка дел, когда пользователь нажимает «завершено» — это будет использоваться для добавления стиля зачеркивания к тексту.
  const strikethrough = (index) => {
    let newArray = [...todo];
    newArray[index].completed = !newArray[index].completed;
    localStorage.setItem("ListDPTD", JSON.stringify(newArray));
    setTodo(newArray);
  };

  // удаляет элемент из состояния и локального хранилища, когда пользователь нажимает «удалить»
  const deleteItem = (index) => {
    const newTodo = todo.filter((item, origIndex) => origIndex !== index);
    localStorage.setItem("ListDPTD", JSON.stringify(newTodo));
    setTodo(newTodo);
  };

  return (
    <ToDoSpan>
      <ToDoWrapper>
        <ToDoHeader>To Do List</ToDoHeader>
        <ToDoList>
          {/* Сопоставляет все элементы в списке дел (из состояния) и отображает пользователю */}
          {todo.length > 0 &&
            todo.map((item, index) => {
              return (
                <ToDoItem key={item.text}>
                  {/* Отображается зачеркнутым текстом, если состояние указывает на то, что элемент выполнен */}
                  <ToDoText
                    id={item.text}
                    className={item.completed && "strikethrough"}
                  >
                    {" "}
                    - {item.text}
                  </ToDoText>
                  <ToDoButtons>
                    <Right>
                      <Button onClick={() => strikethrough(index)}>
                        Completed
                      </Button>
                    </Right>
                    <Right>
                      <Button onClick={() => deleteItem(index)}>Delete</Button>
                    </Right>
                  </ToDoButtons>
                </ToDoItem>
              );
            })}
        </ToDoList>
        <Form>
          <label htmlFor="newitem">Add list item: </label>
          <Input
            type="text"
            id="newitem"
            name="newitem"
            value={newItem}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </ToDoWrapper>
    </ToDoSpan>
  );
};

export default Todo;
