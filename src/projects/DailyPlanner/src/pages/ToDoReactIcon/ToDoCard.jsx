import React, { useState } from "react";

// Icons for Todo Card
import {
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaEye,
  FaEyeSlash,
  FaPencilAlt,
  FaTimesCircle,
} from "react-icons/fa";

export default function ToDoCard({
  id,
  title,
  description,
  status,
  hide,
  handleEditTodo,
  handleDeleteTodo,
  handleChangeStatus,
  ...otherProps
}) {
  const [showDescription, setShowDescription] = useState(false);

  // Checking if the card is to be hidden
  if (hide) return null;

  return (
    <div className="ToDoCard card" {...otherProps}>
      <div className="ToDoCard__left">
        <span
          onClick={() => {
            handleChangeStatus(id);
          }}
        >
          {status === 0 && (
            <FaExclamationCircle
              title="В ожидании"
              className="ToDoCard__icon grey_text"
            />
          )}
          {status === 1 && (
            <FaClock title="В работе" className="ToDoCard__icon blue_text" />
          )}
          {status === 2 && (
            <FaCheckCircle
              title="Выполнено"
              className="ToDoCard__icon green_text"
            />
          )}
        </span>
      </div>
      <div className="ToDoCard__center">
        <h2>{title}</h2>
        {showDescription && <p>{description}</p>}
      </div>
      <div className="ToDoCard__right">
        <FaTimesCircle
          className="ToDoCard__icon red_text"
          title="Удалить"
          onClick={() => {
            handleDeleteTodo(id);
          }}
        />
        <span
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          {showDescription && (
            <FaEye title="Показать описание" className="ToDoCard__icon" />
          )}
          {!showDescription && (
            <FaEyeSlash title="Скрыть описание" className="ToDoCard__icon" />
          )}
        </span>
        <FaPencilAlt
          className="ToDoCard__icon"
          title="Редактировать"
          onClick={() => {
            handleEditTodo(id);
          }}
        />
      </div>
    </div>
  );
}
