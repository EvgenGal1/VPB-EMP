import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// хук для вывода Доп.Меню ч/з Опред.Кобин.Клвш.
import { useAllKeysPress } from "../../scripts/hooks/useAllKeysPress";

// хук для Цветовых Тем (Тёмная/Сетлая/Средняя)
import { useTheme } from "../../scripts/hooks/useTheme";
// переключатель для тем
import { Switcher3btnTheme } from "../ui/Switcher3btnTheme";

export function Header() {
  // ЛОГИКА Опред.Кобин.Клвш. для вывода Доп.Меню
  // стат. показа Доп.Меню
  const [dopCombinePress, setDopCombinePress] = useState(true);
  // массив букв после хука (возвращ true е/и переданные и нажатые равны)
  const combinePress = useAllKeysPress({
    userKeys: ["d", "o", "p", "m", "n"],
    order: true,
  });
  useEffect(() => {
    if (combinePress === true) {
      setDopCombinePress(true);
    }
    console.log("combinePress : " + combinePress);
  }, [combinePress, dopCombinePress]);

  // ЛОГИКА переключателя Цветовых Тем (dark/light/natural)
  // стат./fn Цветовых Тем (Тёмная/Сетлая/Средняя)
  const { theme, setTheme } = useTheme();
  const handleDarkTheme = () => {
    setTheme("dark");
  };
  const handleLightTheme = () => {
    setTheme("light");
  };
  const handleNaturalTheme = () => {
    setTheme("natural");
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header__logo">
            <Link to="/" className="header__link">
              <img
                className="header__img"
                src={require("../../img/vr/logo/ЕжеСветRedBlackWhiteEff.png")}
                alt=""
              />
              <h3>НОВ.ПРОЕКТ</h3>
            </Link>
          </div>
          <div className="header__menu">
            <nav className="header__menu-top menu-top flex flex-wrap justify-between items-center text-white">
              <span className="menu-top__items m-t-items">
                <NavLink to="/NewPro" className="m-t-items__navlink activ-prob">
                  NewPro
                </NavLink>
              </span>
              {/* ПРОЕКТЫ ExpsMiniProjs */}
              {/* ПРОЕКТЫ BeginrProjts */}
              <span className="menu-top__items m-t-items">
                <NavLink
                  to="/BeginrProjts"
                  className="m-t-items__navlink activ-prob"
                >
                  BeginrProjts
                </NavLink>
                {/* // ^ данная вложеность и переход на стр. возможен е/и сами влож.стр. добав. в общ. Routes, на один уровень с верхним NavLink */}
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/BegPrj_Modal" className="">
                      BegPrj_Modal
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/BegPrj_Quiz" className="">
                      BegPrj_Quiz
                    </Link>
                  </li>
                </ul>
              </span>
              {/* ПРОЕКТЫ UlbiTV */}
              <span className="menu-top__items m-t-items">
                <NavLink to="/UlbiTV" className="m-t-items__navlink activ-prob">
                  UlbiTV
                </NavLink>
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/UlbiTV_MiniDrADr" className="">
                      MiniDrADr
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/UlbiTV_DrADr" className="">
                      DrADr
                    </Link>
                  </li>
                </ul>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink to="/Prob0" className="m-t-items__navlink activ-prob">
                  Prob0
                </NavLink>
                {/* // ^ данная вложеность и переход на стр. возможен е/и сами влож.стр. добав. в общ. Routes, на один уровень с верхним NavLink */}
                <ul className="m-t-items__ul m-t-its-ul">
                  <li className="m-t-its-ul__li">
                    <Link to="/Prob1" className="">
                      Prob1
                    </Link>
                  </li>
                  <li className="m-t-its-ul__li">
                    <Link to="/Prob2" className="">
                      Prob2
                    </Link>
                  </li>
                </ul>
              </span>
              <span className="menu-top__items m-t-items">
                <NavLink to="AboutMe" className="m-t-items__navlink">
                  AboutMe
                </NavLink>
              </span>
            </nav>
            {dopCombinePress && (
              <nav className="header__menu-bottom menu-bottom flex flex-wrap justify-between items-center mt-4">
                <span
                  onClick={() => {
                    setDopCombinePress(false);
                  }}
                  className="menu-bottom__items m-b-items"
                >
                  <a className="m-b-items__navlink" href="/#">
                    1
                  </a>
                </span>
                <span className="menu-bottom__items m-b-items">
                  <a className="m-b-items__navlink" href="/package.json#">
                    2
                  </a>
                </span>
                <span className="menu-bottom__items m-b-items">
                  <a className="m-b-items__navlink" href="/#">
                    3
                  </a>
                </span>
                <span className="menu-bottom__items m-b-items">
                  <Switcher3btnTheme
                    handleDarkTheme={handleDarkTheme}
                    handleLightTheme={handleLightTheme}
                    handleNaturalTheme={handleNaturalTheme}
                  />
                </span>
                {/* <MultiKeysPressed
                  keys={["Alt", "a"]}
                  // keys={["Alt", "Control", "Shift"]}
                  // keys={["Shift", "x", "z"]}
                  // keys={["q", "w", "e"]}
                  keysPressed={keysPressed}
                  emoji="WIN"
                /> */}
              </nav>
            )}
            {/* {pressKeyL && pressKeyJ && pressKeyG && ( */}
          </div>
        </div>
      </header>
    </>
  );
}

// export { Header };
