import React, { useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// выбор изза возможности в родителе откр. стр.дочки
import { useTransition, animated } from "react-spring";

// Глав.Эл.Шаблона
import { Header } from "./Header";
import { Footer } from "./Footer";
// Страницы
import { Prob0 } from "../pages/Prob0";
import { Prob1 } from "../pages/Prob1";
import { Prob2 } from "../pages/Prob2";
import { AboutMe } from "../pages/AboutMe";
// НОВ.ПРОЕКТ
import { NewPro } from "../../projects/NewPro/NewPro";

// для аним ч/з react-transition-group
// import "./Router.scss";
// import { Layout } from "./layout.jsx";

export function Router() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      // transform: "translateX(100%)",
      transform: "scale(1.5) ",
      // transform: "scale(1.1) translateY(-150px)",
      // transform: "translateY(-150px)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s",
    },
    enter: {
      opacity: 1,
      // transform: "translateX(0%)",
      transform: "scale(1) ",
      // transform: "scale(1) translateY(0%)",
      // transform: "translateY(0%)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s",
    },
    leave: {
      opacity: 0,
      // transform: "translateX(-100%)",
      transform: "scale(0.5)",
      // transform: "scale(0.9) translateY(-100px)",
      // transform: "translateY(-150px)",
      transitionTimingFunction: "ease",
      // transitionDelay: ".5s",
      position: "absolute",
    },
  });
  return (
    <>
      <Header />
      {/* для аним ч/з react-spring */}
      {transitions((props, item) => (
        <animated.main className="main " style={props}>
          {/* <div
            className="container"
            style={{ width: "100%", overflow: "hidden", padding: "0px 5%" }}
          > */}
          <Routes location={item}>
            <Route index element={<NewPro />} />
            <Route path="NewPro" element={<NewPro />} />
            <Route path="Prob0/*" element={<Prob0 />} />
            <Route path="Prob1" element={<Prob1 />} />
            <Route path="Prob2" element={<Prob2 />} />
            <Route path="AboutMe" element={<AboutMe />} />
          </Routes>
          {/* </div> */}
        </animated.main>
      ))}
      <Footer />
      {/* для аним ч/з react-transition-group */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Prob0 />} />
          <Route path="RR_DOC/" element={<Prob0 />} />
          <Route path="Prob0/*" element={<Prob0 />} />
          <Route path="Prob1" element={<Prob1 />} />
          <Route path="Prob2" element={<Prob2 />} />
          <Route path="AboutMe/" element={<AboutMe />} />
        </Route>
      </Routes> */}
    </>
  );
}
