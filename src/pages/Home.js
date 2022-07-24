import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="section">
      <SearchForm />
      <CocktailList />
      <Outlet />
    </main>
  );
};

export default Home;
