import React from "react";
import { useNavigate } from "react-router-dom";

const Cocktail = (props) => {
  const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } = props;
  const navigate = useNavigate();
  return (
    <article className="cocktail">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>

        <button
          className="btn-details btn-primary"
          onClick={() => navigate(`/cocktail/${idDrink}`, { state: props })}
        >
          Details
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
