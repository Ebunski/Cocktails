import React from "react";
import { useNavigate } from "react-router-dom";

const Cocktail = (props) => {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strGlass: glass,
    strAlcoholic: type,
  } = props;
  const navigate = useNavigate();
  return (
    <article className="cocktail">
      <img src={image} alt={name} />
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{type}</p>

        <button
          className="btn-details btn-primary"
          onClick={() => navigate(`/cocktail/${id}`, { state: props })}
        >
          Details
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
