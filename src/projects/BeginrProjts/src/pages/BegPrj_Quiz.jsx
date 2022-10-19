import React, { useState } from "react";

const questions = [
  {
    id: 1,
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    id: 2,
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    id: 3,
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
  {
    id: 4,
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    id: 5,
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    id: 6,
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img
        alt=""
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      {/* кол-во верных из общего */}
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      {/* перезагрузка на те же стр. */}
      <a href="/BeginrProjts"><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({ question, onClickVar, step }) {
  // вычисляем % прогруса ч/з шаг, кол-во вопросов и округление
  const percentTage = Math.round(step / questions.length * 100)
  // console.log('percentTage : ' + percentTage);

  return (
    <>
      <div className="progress">
        <div
          // отраж прогрес бар в %
          style={{ width: `${percentTage}%` }}
          className="progress__inner"></div>
      </div>
      {/* отражаем вопрос */}
      <h1>{question.title}</h1>
      <ul>
        {/* перебор вар.ответов */}
        {/* клик на любой li запуск fn() дальше. передаём id/index для поним. куда клик. */}
        {question.variants.map((varik, id) => (
          <li
            // onClick={onClickVar}
            onClick={() => onClickVar(id)}
            key={id}>{varik}</li>
        ))}
      </ul>
    </>
  );
}

export function BegPrj_Quiz() {
  // сохран шаг/index вопроса
  const [step, setStep] = useState(0);
  // берём объ.вопрос из масс. вопросов по step
  const question = questions[step]
  // сост. для проверка верных ответов
  const [correct, setCorrect] = useState(0);

  // переход дальше по клик
  const onClickVar = (id) => {
    console.log(step, id, question.correct);
    // увелич шаг на 1
    setStep(step + 1);

    // проверка на верность выбора и ответа в вопросе
    if (id === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="BegPrj_Quiz">
      {/* передаём индексированый вопрос в Игру */}
      {/* fn перекл. вопросов по клик передали в Игру */}
      {/* передаём шаг для прогрес бара */}
      {/* проверка равности шагов и кол-ва вопросов. е/и не равны, то играем */}
      {step !== questions.length
        ?
        <Game question={question} onClickVar={onClickVar} step={step} />
        :
        // передаем кол-во прав.вар.
        <Result correct={correct} />
      }
    </div>
  );
}
