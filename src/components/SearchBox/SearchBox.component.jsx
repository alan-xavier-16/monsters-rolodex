import React from "react";
import "./SearchBox.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="SearchBox"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
