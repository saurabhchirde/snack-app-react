import React from "react";
import "./Search.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <a className="search-mic" href="">
        <i className="fas fa-microphone"></i>
      </a>
      <input type="search" name="search" placeholder="Search" />
      <a className="search-icon" href="">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
};
export default SearchBar;
