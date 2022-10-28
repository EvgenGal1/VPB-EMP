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
  // при 1ом рендер запрос на бэкэнд
  useEffect(() => {
    fetch("https://reqres.in/api/user?_limit=5")
      .then((res) => res.json())
      // уточн. что выташить
      .then((json) => {
        // запись в стате json.data
        setUsers(json.data);
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
        {/* в Польз-ей отправ. стат.масс. как items */}
        <Users items={users} isLoading={isLoading} />
        {/* <Success /> */}
      </div>
    </div>
  );
}
// export default BegPrj_Users;
