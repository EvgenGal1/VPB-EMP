import React, { useState, useEffect } from "react";
import { Users } from "./BegPrj_Users/Users";
import { User } from "./BegPrj_Users/User";
import { Success } from "./BegPrj_Users/Success";

// Тут список пользователей: https://reqres.in/api/users

export function BegPrj_Users() {
  // сост.масс.польз-ей
  const [users, setUsers] = useState([]);
  // сост.загр.польз-ей (изначально загрузка есть)
  const [isLoading, setIsLoading] = useState(true);
  // сост.поиска
  const [searchValue, setSearchValue] = useState("");
  // сост.масс. для приглашённых userов
  const [invites, setInvites] = useState([]);
  // сотс.отправки/успеха
  const [success, setSuccess] = useState(false);

  // fn для измен сост.поиска (запись value из input)
  const onChangeSeacrchValue = (e) => {
    setSearchValue(e.target.value);
  };

  // fn добавл./удал user в масс. приглашённых (клик из User plus/minus)
  const onClickInvite = (id) => {
    // е/и id есть в масс.приглаш. - удал. его
    if (invites.includes(id)) {
      // проверка масс.приглаш. сравн. _id(масс.) и id(принят.) - оставл.разные, удал.одинак.
      setInvites((prev) => prev.filter((_id) => _id !== id));
    }
    // е/и id нет в масс.приглаш. - добавл. ко всем
    else {
      setInvites((prev) => [...prev, id]);
    }
  };

  // fn подтвержд. отправки/успеха
  const onClickSendInvites = () => {
    // setSuccess(true);
    setSuccess((prev) => !prev);
  };

  // при 1ом рендер запрос на бэкэнд
  useEffect(() => {
    fetch("https://reqres.in/api/users?_limit=100")
      // fetch("https://jsonplaceholder.typicode.com/users?_limit=100")
      .then((res) => res.json())
      // уточн. что выташить
      .then((json) => {
        // запись в стате json.data
        setUsers(json.data); // е/и основ. массив вложен в объ. - {"page": 1,"data": [{"id": 1,...},{"id": 2,...},...]}
        // setUsers(json); // для прямых потомков массива - [{"id": 1,...},{"id": 2,...},...]
      })
      // е/и ошб. вывод в cg и на экран
      .catch((err) => {
        console.log("err ", err);
        alert("Получена ошб." + err);
      })
      // в конце загр. откл.
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="BegPrj_Users">
      <div className="Users__descript">
        <h1>BegPrj_Users</h1>
      </div>
      <div className="Users__content">
        {/* рендер по условию */}
        {success ? (
          // передача кол-ва приглаш., fn подтвержд.отправки
          <Success
            count={invites.length}
            onClickSendInvites={onClickSendInvites}
          />
        ) : (
          // {/* в Польз-ей отправ. масс.userов как items, сост.загрузки, сост.поиска + fn()измен., масс.приглаш. + fn()добав./удал., fn подтвержд. отправки */}
          <Users
            items={users}
            isLoading={isLoading}
            searchValue={searchValue}
            onChangeSeacrchValue={onChangeSeacrchValue}
            invites={invites}
            onClickInvite={onClickInvite}
            onClickSendInvites={onClickSendInvites}
          />
        )}
      </div>
    </div>
  );
}
// export default BegPrj_Users;
