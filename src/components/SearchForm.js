import React, { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const [searchItem, setSearchItem] = useState("");

  function handleChange(e) {
    setSearchItem(e.target.value);
  }
  return (
    <section className="search">
      <div className="search-form">
        <form className="form-control">
          <label htmlFor="searchForm">search your favourite cocktail</label>
          <input
            id="searchForm"
            type={"text"}
            onChange={handleChange}
            value={searchItem}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
