import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./FormMN.scss";

const FormMN = () => {
  // объ на основе хук useForm
  const {
    // достаём встроен методы
    // регистрация полей формы
    register,
    // объ со св-ми
    formState: { errors },
    // обёртка на кастом обработчиком
    handleSubmit,
  } = useForm();

  // свой handle (обработчик). прием данн. из form ч/з  handleSubmit
  const onSubmit = (data) => {
    alert(JSON.stringify(data) + " время видео 5:55");
  };

  return (
    <div className="FormMN">
      <div className="FormMN__descript">
        <h1>FormMN</h1>
      </div>
      <div className="FormMN__content">
        {/* Форма. С методом onSubmit с вызовом встр. handleSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ввод текст по умолч*/}
          <label>
            Имя:
            <input
              // метод регистрация (встроены name, value, onChange, ...)
              {
              // хук useForm возвращ.объ, поэтому разворач. метод. передаём 2 парам - 1ый уник. Имя (name, ключ в data), 2ой валидация объ
              ...register(
                "firstName",
                {
                  // парам валидации (заполнено)
                  // ! не выводит стили фокуса у input при отправке не заполненого поля
                  required: true,
                })} />
          </label>
          {/* кнп. отправки */}
          <input className="primary" type="submit" />
        </form>
      </div>
    </div>
  );
};
export { FormMN };
