import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./FormMN.scss";

const FormMN = () => {
  // объ на основе useForm
  const {
    // достаём встроен методы
    // регистрация полей формы
    register,
    // объ со св-ми
    formState: { errors },
    // обёртка на кастом обработчиком
    handleSubmit,
  } = useForm();

  // свой handle (обработчик)
  const onSubmit = () => {};

  return (
    <div className="FormMN">
      <div className="FormMN__descript">
        <h1>FormMN</h1>
      </div>
      <div className="FormMN__content">
        {/* Форма. С методом onSubmit с вызовом встр. handleSubmit */}
        <form onSubmit={handleSubmit}>
          <input className="primary" type="submit" />
        </form>
      </div>
    </div>
  );
};
export { FormMN };
