import React, { useState, useEffect } from "react";
// import { Users } from "./BegPrj_Users/User";
import { Users } from "./BegPrj_Users/Users";
import { User } from "./BegPrj_Users/User";

// Тут список пользователей: https://reqres.in/api/users

export function BegPrj_Users() {
  // стат.масс.польз-ей
  const [users, setUsers] = useState([]);
  // стат.загр.польз-ей (изначально загрузка есть)
  const [isLoading, setIsLoading] = useState(true);
  // стат. для поиска
  const [searchValue, setSearchValue] = useState("");
  // стат. для приглашённых userов
  const [invites, setInvites] = useState([]);

  // fn для измен стат.поиска
  const onChangeSeacrchValue = (e) => {
    setSearchValue(e.target.value);
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
        {/* в Польз-ей отправ. стат.масс. как items, стат.загрузки, стат.поиска+fn для измен. */}
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSeacrchValue={onChangeSeacrchValue}
        />
        {/* <Success /> */}
      </div>
    </div>
  );
}
// export default BegPrj_Users;
