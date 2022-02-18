import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

//now we have a context object
export const BookContext = createContext();

//create the provider and its functionality-->provider
const BookProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "麥田捕手", author: "麥田", id: 1 },
    { title: "原子習慣", author: "習慣", id: 2 },
    { title: "如何利用優勢習慣", author: "習慣", id: 3 },
    { title: "高手學習", author: "高手", id: 4 },
  ]);

  //for the pages that we want to access the context object's value--->consumer
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  //filter if true retain & false remove
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
