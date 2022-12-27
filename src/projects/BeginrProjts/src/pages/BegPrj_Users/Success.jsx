import React from "react";

// сообщение об спехе
export const Success = ({ count, onClickSendInvites }) => {
  return (
    <div className="success-block">
      <img
        alt="Success"
        // src="/assets/success.svg"
        src={require("../../../../../img/minElem/checkMark.png")}
      />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        className="send-invite-btn"
        onClick={onClickSendInvites}
        // алтернатива измен. сост для возврата - перезагрузка страницы
        // onClick={() => window.location.reload()}
      >
        Назад
      </button>
    </div>
  );
};
