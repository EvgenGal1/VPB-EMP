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
    alert(JSON.stringify(data) + " время видео 10:01");
  };

  return (
    <div className="FormMN">
      <div className="FormMN__descript">
        <h1>FormMN</h1>
      </div>
      <div className="FormMN__content">
        {/* Форма. С методом onSubmit с вызовом встр. handleSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* input 1. ввод текст по умолч*/}
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
                  // вовод текстом (message) || boolean // ! не выводит стили фокуса у input при отправке не заполненого поля
                  required: "Поле обязательно к заполнению",
                  // миним длина. можно объ.
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа"
                  }
                })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.firstName && < p>{errors?.firstName?.message || "Error! В firstName"}</ p>}
          </div>
          {/* input 2 */}
          <label>
            Фамилия:
            <input
              {
              ...register(
                "lastName",
                {
                  required: "Поле 2 обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 2. 5 символов"
                  }
                })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.lastName && < p>{errors?.lastName?.message || "Error! В lastName"}</ p>}
          </div>
          {/* input 3 */}
          <label>
            input 3:
            <input
              {
              ...register(
                "lastName3",
                {
                  required: "Поле 2 обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 2. 5 символов"
                  }
                })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.lastName && < p>{errors?.lastName?.message || "Error! В lastName"}</ p>}
          </div>
          {/* input 4 */}
          <label>
            input 4:
            <input
              {
              ...register(
                "lastName4",
                {
                  required: "Поле 2 обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 2. 5 символов"
                  }
                })} />
          </label>
          <div style={{ height: 40 }}>
            {errors?.lastName && < p>{errors?.lastName?.message || "Error! В lastName"}</ p>}
          </div>
          {/* кнп. отправки */}
          <input className="primary" type="submit" />
        </form>
      </div>
    </div>
  );
};
export { FormMN };
