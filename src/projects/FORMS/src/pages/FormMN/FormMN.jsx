import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ToogleFC } from "../../components/ToggleFC";
import { BooksFC } from "../../components/BooksFC";
import { books } from "../../data/data";

import "./FormMN.scss";

const FormMN = () => {
  return (
    <div className="FormMN">
      <div className="FormMN__descript">FormMN</div>
      <div className="FormMN__content">
        <ToogleFC />
        <hr />
        <BooksFC items={books} />
      </div>
    </div>
  );
};
export { FormMN };
