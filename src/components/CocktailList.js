import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { data, isLoading } = useGlobalContext();

  if (isLoading) return <Loading />;

  if (data === null || data.length === 0) {
    return (
      <section className="section">
        <h4 className="section-title">
          No cocktails matched your search criteria
        </h4>
      </section>
    );
  }

  const cocktailItems = data.map((x) => <Cocktail key={x.idDrink} {...x} />);

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">{cocktailItems}</div>
    </section>
  );
};

export default CocktailList;
