import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSeacrchValue,
  invites,
  onClickInvite,
  onClickSendInvites,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          placeholder="Найти пользователя..."
          value={searchValue}
          onChange={onChangeSeacrchValue}
        />
      </div>
      {/* услов. рендер для isLoading */}
      {isLoading ? (
        // либо Skeletonы(аним. каркас загрузки ч/з билб. react-content-loader)
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        // либо один Usera
        <ul className="users-list">
          {/* перебор масс. и передача эл. в User. */}
          {items
            // {/* перед map + фильтр для поиска(сравн. name+email и ввод) и + превращ.строк в един.регистр (toLowerCase) */}
            .filter((item) => {
              const fullName = (item.first_name + item.last_name).toLowerCase();
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                item.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((item) => (
              // Можно передать поштучно(name={item.name},...) или целый объ.({...item})
              <User
                key={item.id}
                {...item}
                // проверка в масс.приглаш передаваемого item.id
                isInvited={invites.includes(item.id)}
                // fn()добав./удал. user в масс.приглаш
                onClickInvite={onClickInvite}
              />
            ))}
        </ul>
      )}
      {/* отрисовка если кто-то выбран */}
      {invites.length > 0 && (
        <button className="send-invite-btn" onClick={onClickSendInvites}>
          Отправить приглашение
        </button>
      )}
    </>
  );
};
