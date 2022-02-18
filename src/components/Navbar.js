import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>我的閱讀清單</h1>
      <p>{`你現在共有 ${books.length}本書`}</p>
    </div>
  );
};

export default Navbar;
