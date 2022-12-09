import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useToggle } from '../hooks/useToggle';

import "./FormMN.scss";

const FormMN = () => {
  const [isVisible, toggleIsVisible] = useToggle(true);

  return (
    <div className="FormMN">
      <div className="FormMN__descript">Form Desc</div>
      <div className="FormMN__content">
        <button onClick={toggleIsVisible}>Переключатель</button>
        {isVisible && (<>
          <div>Form Const</div>
        </>)}
      </div>
    </div>
  );
};
export { FormMN };
