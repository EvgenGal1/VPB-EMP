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
    formState: { errors,
      // настр валид. отправки
      isValid },
    // обёртка на кастом обработчиком
    handleSubmit,
    // метод очистки
    reset,

  }
    = useForm({
      // режимы moda all/onBlur(фокус)/onCgange/onSubmit/...
      mode: "onBlur"
    }
    )
  // = useForm();
  // передача объ в хук при вызове

  // свой handle (обработчик). прием данн. из form ч/з  handleSubmit
  const onSubmit = (data) => {
    alert(JSON.stringify(data) + " время видео 10:01");
    // очистка формы
    reset()
  };

  return (
    <div className="FormMN">
      <div className="FormMN__descript">
        <h1>FormMN</h1>
        <p style={{ color: "red", backgroundColor: "#111" }}>
          !!! ОЧЕНЬ много настр./парам./примеров в оф.док - https://react-hook-form.com
        </p>
      </div>
      <div className="FormMN__content">
        {/* Форма. С методом onSubmit с вызовом встр. handleSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* input 1. ввод текст по умолч*/}
          <label>
            Имя:
            <input
              placeholder="Имя"
              // метод регистрация (встроены name, value, onChange, ...)
              {
              // хук useForm возвращ.объ, поэтому разворач. метод. передаём 2 парам - 1ый уник. Имя (name, ключ в data), 2ой объ валидации
              ...register(
                "firstName",
                {
                  // парам валидации (заполнено)
                  // вовод текстом (message) || boolean // ! не выводит стили фокуса у input при отправке не заполненого поля
                  required: "Поле обязательно к заполнению",
                  // миним длина. можно объ. с длиной и смс ошб.
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа"
                  }
                })} />
            {/* вывод смс ошб. е/и есть ошб. где есть firstName(из register) то вывод <p> с ошб. Гибкость ошб. в <p> либо смс из massage, либо по умолч. */}
            {errors?.firstName && <p>{errors?.firstName?.message || "Error! В firstName"}</ p>}
          </label>
          {/* перенёс смс ошб.  внутрь label, убрал обёртку div */}
          {/* <div style={{ height: 40 }}> */}
          {/* {errors?.firstName && <p>{errors?.firstName?.message || "Error! В firstName"}</ p>} */}
          {/* </div> */}
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
            {errors?.lastName && < p>{errors?.lastName?.message || "Error! В lastName"}</ p>}
          </label>
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
            {errors?.lastName && < p>{errors?.lastName?.message || "Error! В lastName"}</ p>}
          </label>
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
            {errors?.lastName && < p>{errors?.lastName?.message || "Error! В lastName"}</ p>}
          </label>
          {/* кнп. отправки */}
          <input className="primary" type="submit"
            // выкл при НЕ валид.
            disabled={!isValid}
          />
        </form>
      </div>
    </div>
  );
};
export { FormMN };
