import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

//now we have a context object
export const BookContext = createContext();

//create the provider and its functionality-->provider
const BookProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
