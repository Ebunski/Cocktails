import React from "react";
import Loading from "../components/Loading";
import { useParams, Link, useLocation } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const location = useLocation();
  console.log(location);

  const pairs = Object.entries(location.state);
  const instructions = pairs
    .filter((x) => x[0].includes("strIngredient") && x[1] !== null)
    .map((x) => x[1])
    .map((x) => <span>{x}</span>);

  console.log(instructions);

  const details = [
    { tag: "name", value: location.state.strDrink },
    { tag: "category", value: location.state.strCategory },
    { tag: "info", value: location.state.strAlcoholic },
    { tag: "glass", value: location.state.strGlass },
    { tag: "instructions", value: location.state.strInstructions },
    { tag: "ingredients", value: instructions },
  ];

  const info = details.map((x) => (
    <p>
      <span className="drink-data">{x.tag}</span>
      {x.value}
    </p>
  ));

  /*
  ========
  Info about cocktail
  ========
  */

  return (
    <section className="section cocktail-section">
      <Link to="/">
        <button className="btn-primary">back home</button>
      </Link>
      <h2 className="section-title">{location.state.strDrink}</h2>

      <article className="drink">
        <img src={location.state.strDrinkThumb} alt={location.state.strDrink} />
        <div className="drink-info">{info}</div>
      </article>
    </section>
  );
};

export default SingleCocktail;
