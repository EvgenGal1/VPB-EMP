import React, { useState, useEffect } from "react";

import { FaTimes } from "react-icons/fa";

function ToDoForm({
  title: titleProps,
  description: descriptionProps,
  status: statusProps,
  id,
  closeForm,
  handleAddTodo,
}) {
  const [title, setTitle] = useState(titleProps);
  const [description, setDescription] = useState(descriptionProps);
  const [status, setStatus] = useState(statusProps);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleStatusChange(e) {
    setStatus(parseInt(e.target.value));
  }

  function handleCloseForm() {
    setTitle("");
    setDescription("");
    setStatus(0);
    closeForm();
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (title === "" || description === "") {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    if (id >= 0) handleAddTodo({ title, description, status, id: id });
    else handleAddTodo({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus(0);
  }

  return (
    <form className="ToDoForm" onSubmit={(e) => handleFormSubmit(e)}>
      <FaTimes
        className="close-btn"
        title="Отмена"
        onClick={() => handleCloseForm()}
      />
      <h2>ToDo Form</h2>
      <div className="ToDoForm__field">
        <label htmlFor="title">Заголовок</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => handleTitleChange(e)}
        />
      </div>
      <div className="ToDoForm__field">
        <label htmlFor="description">Описание</label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={(e) => handleDescriptionChange(e)}
        />
      </div>
      <div className="ToDoForm__field">
        <label htmlFor="status">Положение дел</label>
        <select
          id="status"
          value={status}
          onChange={(e) => handleStatusChange(e)}
        >
          <option value="0">В ожидании</option>
          <option value="1">В работе</option>
          <option value="2">Выполнено</option>
        </select>
      </div>
      <div className="ToDoForm__action">
        <button type="submit">{id === -1 ? "Добавить" : "Обновить"}</button>
      </div>
    </form>
  );
}

ToDoForm.defaultProps = {
  title: "",
  description: "",
  status: 0,
  id: -1,
};

export default ToDoForm;
