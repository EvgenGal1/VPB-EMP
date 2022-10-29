import React from "react";

// const Users = () => (
// export const User = ({ id, name, year, color, pantone_value }) => (
// export const User = ({ id, name, username, email, address }) => {
export const User = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <>
      <li>
        <div>
          <img
            className="avatar"
            // src={require("../../../../../img/vr/catalog/anonim1.jpg")}
            src={avatar}
            width="150"
            height="150"
            alt="anonim"
            target="_blank"
          />
          <div>
            {/* <h3>Amon Bower</h3> */}
            <h3>
              {first_name} {last_name}
            </h3>
            <p>
              <svg
                width="25"
                height="25"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
              </svg>
              {/* george.bluth@reqres.in */}
              {email}
            </p>
          </div>
        </div>
        <img
          className="action"
          // src={require("../../../../../img/vr/minElem/qw_bl-trsp.png")}
          src={require("../../../../../img/vr/minElem/plus.png")}
          alt="Action"
        />
      </li>
    </>
  );
};
// export { User };
