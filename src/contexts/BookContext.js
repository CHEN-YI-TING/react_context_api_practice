import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

//now we have a context object
export const BookContext = createContext();

//create the provider and its functionality-->provider
const BookProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
