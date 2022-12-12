import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./FormDoc.scss";

// Базовый пример
function BasicExampl() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <div className="BasicExampl">
        <div className="BasicExampl__descript"><h1>Базовый пример</h1></div>
        <div className="BasicExampl__content">
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

// Кастомный пример
function CustomValidation(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const intialValues = {
    firstName: "Введите Имя0",
    lastName: "Введите фамилию",
    // email: "bluebill1049@hotmail.com",
    email: "Введите эл.адрес",
    // age: -1,
    age: "Введите возраст",
  };

  return (
    <div className="CustomValidation">
      <div className="CustomValidation__descript"><h1>Пользовательская проверка</h1></div>
      <div className="CustomValidation__content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">Имя</label>
          <input
            defaultValue={intialValues.firstName}
            placeholder="Введите Имя1"
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

          <input type="submit" className="primary" />
        </form>
      </div>
    </div>
  );
}

function FormDoc() {
  return (
    <div className="FormDoc">
      <div className="FormDoc__descript"></div>
      <div className="FormDoc__content">
        <BasicExampl />
        <hr />
        <CustomValidation />
        <hr />
      </div>
      <div className="FormDoc__frame">FormDoc</div>
    </div>
  );
}
export { FormDoc };
