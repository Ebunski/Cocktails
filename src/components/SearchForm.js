import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const formRef = useRef();

  useEffect(() => {
    formRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="search">
      <div className="search-form">
        <form className="form-control" onSubmit={handleSubmit}>
          <label htmlFor="searchForm">search your favourite cocktail</label>
          <input
            id="searchForm"
            type={"text"}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={formRef}
            value={searchTerm}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
