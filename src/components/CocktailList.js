import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { data, isLoading } = useGlobalContext();

  if (isLoading) return <Loading />;

  console.log(data);

  const cocktailItems = data.map((x) => <Cocktail key={x.idDrink} {...x} />);
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">{cocktailItems}</div>
    </section>
  );
};

export default CocktailList;
