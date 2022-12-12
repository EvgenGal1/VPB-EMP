import React from "react";
import { useState } from "react";

const Book = (props) => {
  const { id, title, price } = props;

  return (
    <div className="Book">
      <h2>{title}</h2>
      <span>{price}</span>
      <button>Купить</button>
    </div>
  );
};

export function BooksFC(props) {
  // приним и запись как массив
  const { items = [] } = props;

  return (
    <div className="BooksFC">
      <div className="BooksFC__descript">
        <h1>BooksFC</h1>
      </div>
      <div className="BooksFC__content">
        {/* перебор и передача в дочку */}
        {items.map((books) => (
          <Book key={books.id} {...books} />
        ))}
      </div>
    </div>
  );
}
