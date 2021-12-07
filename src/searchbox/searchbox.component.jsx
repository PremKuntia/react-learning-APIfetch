import React from "react";
import "./searchbox.component.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
