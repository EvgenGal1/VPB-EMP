import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./FormDoc.scss";

function FormDoc() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const intialValues = {
    firstName: "Введите Имя",
    lastName: "Введите фамилию",
    // email: "bluebill1049@hotmail.com",
    email: "Введите эл.адрес",
    // age: -1,
    age: "Введите возраст",
  };

  return (
    <div className="FormDoc">
      <div className="FormDoc__descript">Form Desc</div>
      <div className="FormDoc__content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">Имя</label>
          <input
            defaultValue={intialValues.firstName}
            placeholder="Введите Имя"
            {...register("firstName", {
              validate: (value) => value !== "Введите Имя",
            })}
          />
          {errors.firstName && <p>Ваше имя не ?корректно?</p>}

          <label htmlFor="lastName">Фамилия</label>
          <input
            defaultValue={intialValues.lastName}
            placeholder="luo"
            {...register("lastName", {
              validate: (value) => value.length > 3,
            })}
          />
          {errors.lastName && <p>Ваша фамилия менее 3 символов</p>}

          <label htmlFor="email">Эл.адрес</label>
          <input
            defaultValue={intialValues.email}
            placeholder="bluebill1049@hotmail.com"
            type="email"
            {...register("email")}
          />
          <label htmlFor="age">Возраст</label>
          <input
            defaultValue={intialValues.age}
            placeholder="0"
            type="text"
            {...register("age", {
              validate: {
                positiveNumber: (value) => parseFloat(value) > 0,
                lessThanHundred: (value) => parseFloat(value) < 200,
              },
            })}
          />
          {errors.age && errors.age.type === "positiveNumber" && (
            <p>Ваш возраст недействителен</p>
          )}
          {errors.age && errors.age.type === "lessThanHundred" && (
            <p>Ваш возраст не должен быть более 200</p>
          )}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
export { FormDoc };
