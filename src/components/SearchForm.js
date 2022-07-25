import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  return (
    <section className="search">
      <div className="search-form">
        <form className="form-control">
          <label htmlFor="searchForm">search your favourite cocktail</label>
          <input
            id="searchForm"
            type={"text"}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
